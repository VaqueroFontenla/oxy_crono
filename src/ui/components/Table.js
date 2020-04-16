import { Table as ADTable } from "antd";
import React from "react";
import styled from "styled-components";
import * as sortBy from "../assets/js/sorter";
import { Button } from "./Button";
import { CountdownCell } from "./CountDown";

export const Table = ({ dataSource, editRecord, deleteRecord }) => {
  const COLUMNS = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sorter: sortBy.sortByName,
    },
    {
      title: "Nº cama",
      dataIndex: "bed",
      key: "bed",
      align: "center",
      sorter: sortBy.sortByBed,
    },
    {
      title: "Inicio",
      dataIndex: "start",
      key: "start",
      sorter: sortBy.sortByStartTime,
    },
    {
      title: "Presion (bar)",
      dataIndex: "press",
      key: "press",
      align: "center",
    },
    {
      title: "Volumen (l)",
      dataIndex: "volume",
      key: "volume",
      align: "center",
    },
    {
      title: "Caudal (l/m)",
      dataIndex: "flow",
      key: "flow",
      align: "center",
    },
    {
      title: "Duración (h)",
      dataIndex: "duration",
      key: "duration",
      align: "center",
    },
    {
      title: "Fin",
      dataIndex: "finish",
      key: "finish",
      align: "center",
    },
    {
      title: "Restante",
      dataIndex: "remaining",
      key: "remaining",
      align: "center",
      defaultSortOrder: "ascend",
      sorter: sortBy.sortByRemainingTime,
      render: (record) => CountdownCell(record),
    },
    {
      title: "Acciones",
      key: "action",
      align: "center",
      render: (record) => (
        <ActionsContainer>
          <Button
            type="primary"
            size="large"
            onClick={() => editRecord(record.id)}
          >
            Editar
          </Button>
          <Button
            type="danger"
            size="large"
            onClick={() => deleteRecord(record.id)}
          >
            Eliminar
          </Button>
        </ActionsContainer>
      ),
    },
  ];
  return (
    <Container>
      <ADTable dataSource={dataSource} columns={COLUMNS} />;
    </Container>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  margin-top: 24px;
`;
