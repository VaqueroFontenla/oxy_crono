import React, { useEffect, useState } from "react";
import "moment/locale/es";
import * as service from "../../core/service";
import * as calculate from "../assets/js/calculate";
import { Divider } from "antd";
import { Button } from "../components/Button";
import { Clock } from "../components/Clock";
import { Col } from "../components/grid/Col";
import { Row } from "../components/grid/Row";
import { Modal } from "../components/Modal";
import { Alert } from "../components/Alert";
import { Table } from "../components/Table";
import { Title, Container } from "./App.styles";
import "../theme/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [recordInfo, setRecordInfo] = useState(undefined);
  const [idDelete, setIdDelete] = useState(undefined);
  const [idUpdate, setIdUpdate] = useState(undefined);
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [isAlertOpen, toggleAlertOpen] = useState(false);
  const [currentFilterValueName, setCurrentFilterValueName] = useState("");
  const [currentFilterValueBed, setCurrentFilterValueBed] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadRecords();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    loadRecords();
  }, []);

  useEffect(() => {
    const filterData = data.filter((entry) =>
      entry.name.includes(currentFilterValueName)
    );
    
    filterData
      ? setFilteredData(filterData)
      : setFilteredData(data);
  }, [currentFilterValueName, data]);

  useEffect(() => {
    const filterData = data.filter(
      entry => entry.bed === parseInt(currentFilterValueBed)
    );

    filterData.length
      ? setFilteredData(filterData)
      : setFilteredData(data);
  }, [currentFilterValueBed, data]);

  const onChangeFilterName = (e) => {
    setCurrentFilterValueName(e.target.value);
  };
  const onChangeFilterBed = (e) => {
    setCurrentFilterValueBed(e.target.value);
    console.log(e.target.value);
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
        data={recordInfo}
        visible={isModalOpen}
        onCancel={() => closeModal()}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
      <Alert
        visible={isAlertOpen}
        onCancel={() => closeAlert()}
        onDelete={deleteRecord}
      />
      <Table
        currentFilterValueName={currentFilterValueName}
        currentFilterValueBed={currentFilterValueBed}
        onChangeFilterName={onChangeFilterName}
        onChangeFilterBed={onChangeFilterBed}
        dataSource={filteredData}
        editRecord={getRecord}
        deleteRecord={openAlert}
      />
    </Container>
  );

  function openModal() {
    toggleModalOpen(true);
  }

  function closeModal() {
    setRecordInfo();
    toggleModalOpen(false);
  }

  function openAlert(id) {
    setIdDelete(id);
    toggleAlertOpen(true);
  }

  function closeAlert() {
    setIdDelete(undefined);
    toggleAlertOpen(false);
  }

  async function loadRecords() {
    const result = await service.getAllRecords();
    const calculateData = calculate.calculate(result);
    setData(calculateData);
    setFilteredData(calculateData);
  }

  async function getRecord(id) {
    setIdUpdate(id);
    const result = await service.getRecord(id);
    setRecordInfo(result);
    openModal();
  }

  async function onCreate(values) {
    await service.addRecord(values);
    loadRecords();
    closeModal();
  }

  async function onUpdate(values) {
    await service.updateRecord(idUpdate, values);
    setIdUpdate(undefined);
    setRecordInfo();
    loadRecords();
    closeModal();
  }

  async function deleteRecord() {
    await service.deleteRecord(idDelete);
    loadRecords();
    closeAlert();
  }
};

export default App;
