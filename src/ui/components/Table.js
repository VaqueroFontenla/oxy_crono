import { Table as ADTable } from "antd";
import React from "react";
import styled from "styled-components";
import * as sortBy from "../assets/js/sorter";
import { Button } from "./Button";
import { Filter } from "./Filter";
import { CountdownCell } from "./CountDown";
import { SearchOutlined } from "@ant-design/icons";

export const Table = ({
  dataSource,
  editRecord,
  deleteRecord,
  currentFilterValueName,
  onChangeFilterName,
  currentFilterValueBed,
  onChangeFilterBed,
}) => {
  const COLUMNS = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sorter: sortBy.sortByName,
      filterDropdown: (
        <Filter
          onChangeFilter={onChangeFilterName}
          currentFilterValue={currentFilterValueName}
        />
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },
    {
      title: "Nº cama",
      dataIndex: "bed",
      key: "bed",
      align: "center",
      sorter: sortBy.sortByBed,
      filterDropdown: (
        <Filter
          onChangeFilter={onChangeFilterBed}
          currentFilterValue={currentFilterValueBed}
        />
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
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
      <ADTable dataSource={dataSource} columns={COLUMNS} />
    </Container>
  )
};

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  margin-top: 24px;
`;
