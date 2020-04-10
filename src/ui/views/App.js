import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import styled from "styled-components";
import * as apiClient from "../../core/apiClient";
import { Button } from "../components/Button";
import { Clock } from "../components/Clock";
import { Col } from "../components/grid/Col";
import { Row } from "../components/grid/Row";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";
import { Divider } from "antd";
import "../theme/App.css";

const App = () => {
  const [data, setData] = useState([]);
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
      //Calculate Remaining
      const now = moment().format("x");
      const endHourTimeStamp = endHour.format("x");
      const remaining = moment(endHourTimeStamp - now).format("HH:mm");
      return {
        ...item,
        start: moment(item.start).format("HH:mm"),
        duration: duration,
        finish: formattedEndHour,
        remaining: remaining,
      };
    });
    setData(calculatedata);
  };

  useEffect(() => {
    const fechtData = async () => {
      const result = await apiClient.getAllBeds();
      calculate(result);
    };
    fechtData();
  }, []);

  const openModal = () => {
    toggleModalOpen(true);
  };

  const closeModal = () => {
    toggleModalOpen(false);
  };

  const onCreate = (values) => {
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
        visible={isModalOpen}
        onCancel={() => closeModal()}
        onCreate={onCreate}
      />
      <Table dataSource={data} />
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
