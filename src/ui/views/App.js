import { Divider } from "antd";
import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as service from "../../core/service";
import { Button } from "../components/Button";
import { Clock } from "../components/Clock";
import { Col } from "../components/grid/Col";
import { Row } from "../components/grid/Row";
import { Modal } from "../components/Modal";
import { Alert } from "../components/Alert";
import { Table } from "../components/Table";
import "../theme/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [bedInfo, setBedInfo] = useState(undefined);
  const [idDelete, setIdDelete] = useState(undefined);
  const [idUpdate, setIdUpdate] = useState(undefined);
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [isAlertOpen, toggleAlertOpen] = useState(false);

  const fechtData = async () => {
    const result = await service.getAllBeds();
    calculate(result);
    setTimeout(fechtData, 60000);
  };

  const calculate = (data) => {
    const calculatedata = data.map((item, key) => {
      //Calculate Duration
      const hoursDuration = parseInt(
        (item.press * item.volume) / item.flow / 60
      );
      const minutesDuration = ((item.press * item.volume) / item.flow) % 60;
      const duration = moment({
        hour: hoursDuration,
        minute: minutesDuration,
      }).format("HH:mm");

      //Calculate End Hour
      const endHour = moment(item.start)
        .add(hoursDuration, "hours")
        .add(minutesDuration, "minutes");
      const formattedEndHour = endHour.format("HH:mm");

      return {
        ...item,
        start: moment(item.start).format("HH:mm"),
        duration: duration,
        finish: formattedEndHour,
        remaining: endHour,
      };
    });
    setData(calculatedata);
  };

  useEffect(() => {
    fechtData();
  }, []);

  const deleteBedData = async () => {
    await service.deleteBedData(idDelete);
    fechtData();
    closeAlert()
  };

  const getBedData = async (id) => {
    setIdUpdate(id)
    const result = await service.getBed(id);
    setBedInfo(result);
    openModal();
  };

  const openModal = () => {
    toggleModalOpen(true);
  };

  const closeModal = () => {
    setBedInfo();
    toggleModalOpen(false);
  };

  const openAlert = (id) => {
    setIdDelete(id);
    toggleAlertOpen(true);
  };

  const closeAlert = () => {
    setIdDelete(undefined);
    toggleAlertOpen(false);
  };

  const onCreate = async (values) => {
    await service.addBed(values);
    fechtData();
    closeModal();
  };

  const onUpdate = async (values) => {
    await service.updateBed(idUpdate, values);
    setIdUpdate(undefined);
    setBedInfo();
    fechtData();
    closeModal();
  };

  return (
    <Container>
      <Row justify={"end"}>
        <Clock />
      </Row>
      <Divider />
      <Row justify={"start"}>
        <Col span={5}>
          <Title>Crono</Title>
        </Col>
      </Row>

      <Row justify={"end"}>
        <Button type="primary" size="large" onClick={() => openModal()}>
          Añadir un paciente
        </Button>
      </Row>
      <Modal
        data={bedInfo}
        visible={isModalOpen}
        onCancel={() => closeModal()}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
      <Alert
        visible={isAlertOpen}
        onCancel={() => closeAlert()}
        onDelete={deleteBedData}
      />
      <Table dataSource={data} editBed={getBedData} deleteBed={openAlert} />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 3rem;
`;

const Title = styled.span`
  color: #1890ff;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
`;

export default App;
