import React from "react";
import { Table } from "antd";
import styled from "styled-components";

export const TablePatient = ({ dataSource }) => {

  const sortedInfo = {
    order: "descend",
    columnKey: "remaining"
  };
  const COLUMNS = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
    },
    {
      title: "Nº cama",
      dataIndex: "bed",
      key: "bed",
      sortOrder: sortedInfo.columnKey === "bed" && sortedInfo.order
    },
    {
      title: "Inicio",
      dataIndex: "start",
      key: "start",
      sortOrder: sortedInfo.columnKey === "start" && sortedInfo.order
    },
    {
      title: "Presion (bar)",
      dataIndex: "press",
      key: "press",
      sortOrder: sortedInfo.columnKey === "press" && sortedInfo.order
    },
    {
      title: "Volumen (l)",
      dataIndex: "volume",
      key: "volume",
      sortOrder: sortedInfo.columnKey === "volume" && sortedInfo.order
    },
    {
      title: "Caudal (l)",
      dataIndex: "flow",
      key: "flow",
      sortOrder: sortedInfo.columnKey === "flow" && sortedInfo.order
    },
    {
      title: "Duración (h)",
      dataIndex: "duration",
      key: "duration",
      sortOrder: sortedInfo.columnKey === "duration" && sortedInfo.order
    },
    {
      title: "Fin",
      dataIndex: "finish",
      key: "finish",
      sortOrder: sortedInfo.columnKey === "finish" && sortedInfo.order
    },
    {
      title: "Restante",
      dataIndex: "remaining",
      key: "remainig",
      sortOrder: sortedInfo.columnKey === "remainig" && sortedInfo.order
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <span>
          <button>Editar</button>
          <button>Eliminar</button>
        </span>
      )
    }
  ];
  return (
    <Wrapper>
      <Table dataSource={dataSource} columns={COLUMNS} />;
    </Wrapper>
  );
};

const Wrapper = styled.div``;
