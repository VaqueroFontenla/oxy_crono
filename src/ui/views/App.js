import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../theme/App.css";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { Button } from "antd";
import { TablePatient } from "../components/TablePatient";
import { Clock } from "../components/Clock";
import { Modal } from "../components/Modal";
const App = () => {
  const url = "http://localhost:8080/";
  const [data, setData] = useState([]);
  const [isModalOpen, toggleModalOpen] = useState(false)
  const calculate = data => {
    const calculatedata = data.map((item, key) => {
      //Calculate Duration
      const hoursDuration = parseInt(
        (item.press * item.volume) / item.flow / 60
      );
      const minutesDuration = ((item.press * item.volume) / item.flow) % 60;
      const duration = moment({
        hour: hoursDuration,
        minute: minutesDuration
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
        remaining: remaining
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
  function openModal() {
    toggleModalOpen(true)
  }

  function closeModal() {
    toggleModalOpen(false)
  }
  return (
    <Container>
      <Clock />
      <Button type="primary" onClick={()=>openModal()}>
          Open Modal
        </Button>
        <Modal visible={isModalOpen} onClose={()=>closeModal()}/>
      <TablePatient dataSource={data} />
    </Container>
  );
};
const Container = styled.div`
  padding: 5rem;
`;

export default App;
