import { Table as ADTable } from "antd";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Table = ({ dataSource }) => {
  const openModal = () => {};

  const sortedInfo = {
    order: "descend",
    columnKey: "remaining",
  };
  const COLUMNS = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
    },
    {
      title: "Nº cama",
      dataIndex: "bed",
      key: "bed",
      sortOrder: sortedInfo.columnKey === "bed" && sortedInfo.order,
    },
    {
      title: "Inicio",
      dataIndex: "start",
      key: "start",
      sortOrder: sortedInfo.columnKey === "start" && sortedInfo.order,
    },
    {
      title: "Presion (bar)",
      dataIndex: "press",
      key: "press",
      sortOrder: sortedInfo.columnKey === "press" && sortedInfo.order,
    },
    {
      title: "Volumen (l)",
      dataIndex: "volume",
      key: "volume",
      sortOrder: sortedInfo.columnKey === "volume" && sortedInfo.order,
    },
    {
      title: "Caudal (l/m)",
      dataIndex: "flow",
      key: "flow",
      sortOrder: sortedInfo.columnKey === "flow" && sortedInfo.order,
    },
    {
      title: "Duración (h)",
      dataIndex: "duration",
      key: "duration",
      sortOrder: sortedInfo.columnKey === "duration" && sortedInfo.order,
    },
    {
      title: "Fin",
      dataIndex: "finish",
      key: "finish",
      sortOrder: sortedInfo.columnKey === "finish" && sortedInfo.order,
    },
    {
      title: "Restante",
      dataIndex: "remaining",
      key: "remainig",
      sortOrder: sortedInfo.columnKey === "remainig" && sortedInfo.order,
    },
    {
      title: "Acciones",
      key: "action",
      render: () => (
        <span>
          <Button type="primary" size="small" onClick={() => openModal()}>
            Editar
          </Button>
          <Button type="cancel" size="small" onClick={() => openModal()}>
            Eliminar
          </Button>
        </span>
      ),
    },
  ];
  return (
    <Container>
      <ADTable dataSource={dataSource} columns={COLUMNS} />;
    </Container>
  );
};

const Container = styled.div`
  margin-top: 24px;
`;
