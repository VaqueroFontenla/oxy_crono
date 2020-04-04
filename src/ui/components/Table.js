import React from "react";
import moment from "moment";
import { Table as ADTable } from "antd";
import styled from "styled-components";
import { Button } from "./Button";

export const Table = ({ dataSource }) => {
  const openModal = () => {};

  const COLUMNS = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => {
        const aString = a.name.toLowerCase();
        const bString = b.name.toLowerCase();
        if (aString < bString) {
          return -1;
        } else if (aString > bString) {
          return 1;
        } else {
          return 0;
        }
      },
    },
    {
      title: "Nº cama",
      dataIndex: "bed",
      key: "bed",
      sorter: (a, b) => a.bed - b.bed,
    },
    {
      title: "Inicio",
      dataIndex: "start",
      key: "start",
      sorter: (a, b) =>
      moment(a.start, "HH:mm").unix() -
      moment(b.start, "HH:mm").unix()
    },
    {
      title: "Presion (bar)",
      dataIndex: "press",
      key: "press",
    },
    {
      title: "Volumen (l)",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Caudal (l/m)",
      dataIndex: "flow",
      key: "flow",
    },
    {
      title: "Duración (h)",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Fin",
      dataIndex: "finish",
      key: "finish",
      defaultSortOrder: 'ascend',
      sorter: (a, b) =>
      moment(a.finish, "HH:mm").unix() -
      moment(b.finish, "HH:mm").unix()
    },
    {
      title: "Restante",
      dataIndex: "remaining",
      key: "remainig",
      sorter: (a, b) =>
        moment(a.remaining, "HH:mm").unix() -
        moment(b.remaining, "HH:mm").unix()
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
