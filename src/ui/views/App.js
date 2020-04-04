import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../theme/App.css";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { Divider } from "antd";
import { Button } from "../components/Button";
import { Table } from "../components/Table";
import { Clock } from "../components/Clock";
import { Row } from "../components/grid/Row";
import { Col } from "../components/grid/Col";
import { Modal } from "../components/Modal";

const App = () => {
  const url = "http://localhost:8080/";
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
      const endHour = moment(item.start, "HH:mm")
        .add(hoursDuration, "hours")
        .add(minutesDuration, "minutes");
      const formattedEndHour = endHour.format("HH:mm");
      //Calculate Remaining
      const now = moment().format("x");
      const endHourTimeStamp = endHour.format("x");
      const remaining = moment(endHourTimeStamp - now).format("HH:mm");
      return {
        ...item,
        duration: duration,
        finish: formattedEndHour,
        remaining: remaining,
      };
    });
    setData(calculatedata);
  };
  useEffect(() => {
    const fechtData = async () => {
      try {
        const result = await axios(url);
        calculate(result.data);
      } catch (error) {}
    };
    fechtData();
  }, []);
  const openModal = () => {
    toggleModalOpen(true);
  }

  const closeModal = () => {
    toggleModalOpen(false);
  }
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
      <Modal visible={isModalOpen} onClose={() => closeModal()} />
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
