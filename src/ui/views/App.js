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
import { Table } from "../components/Table";
import "../theme/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [bedInfo, setBedInfo] = useState(undefined);
  const [isModalOpen, toggleModalOpen] = useState(false);

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
    const fechtData = async () => {
      const result = await service.getAllBeds();
      calculate(result);
      //setTimeout(fechtData, 60000);
    };
    fechtData();
  }, []);

  const getBedData = async (id) => {
    const result = await service.getBed(id);
    await setBedInfo(result);
    await toggleModalOpen(true);
  };

  const openModal = (id) => {
    if (id) {
      getBedData(id);
    } else {
      toggleModalOpen(true);
    }
  };

  const closeModal = () => {
    toggleModalOpen(false);
  };

  const onCreate = async (values) => {
    await service.addBed(values);
    closeModal();
    console.log("Received values of form: ", values);
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
      />
      <Table dataSource={data} openModal={openModal} />
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
