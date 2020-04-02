import React from "react";
import { Table } from "antd";
import styled from "styled-components";

export const TablePatient = ({ dataSource }) => {
  const COLUMNS = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Nº cama",
      dataIndex: "bed",
      key: "bed"
    },
    {
      title: "Inicio",
      dataIndex: "start",
      key: "start"
    },
    {
      title: "Presion (bar)",
      dataIndex: "press",
      key: "press"
    },
    {
      title: "Volumen (l)",
      dataIndex: "volume",
      key: "volume"
    },
    {
      title: "Caudal (l)",
      dataIndex: "flow",
      key: "flow"
    },
    {
      title: "Duración (h)",
      dataIndex: "duration",
      key: "duration"
    },
    {
      title: "Fin",
      dataIndex: "finish",
      key: "finish"
    },
    {
      title: "Restante",
      dataIndex: "remaining",
      key: "remainig"
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
