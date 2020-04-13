import React from "react";
import moment from "moment";
import { Table as ADTable } from "antd";
import styled from "styled-components";
import { Button } from "./Button";
import { Statistic } from "antd";
import * as sortBy from "../assets/js/sorter";

export const Table = ({ dataSource, editBed, deleteBed }) => {
  const { Countdown } = Statistic;

  const DEADLINE_DANGER = 7200000;
  const DEADLINE_MOD = 10800000;

  function onFinish() {
    console.log("finished!");
  }

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
      sorter: sortBy.sortByFinishTime,
    },
    {
      title: "Restante",
      dataIndex: "remaining",
      key: "remaining",
      align: "center",
      defaultSortOrder: "ascend",
      sorter: sortBy.sortByRemainingTime,
      render: (record) => {
        const remaining = record - moment();
        if (moment(remaining, "x") < DEADLINE_DANGER) {
          return (
            <RedContainer>
              <Countdown valueStyle={stylesCountDown} value={record} onFinish={onFinish} />
            </RedContainer>
          );
        }
        if (DEADLINE_DANGER < moment(remaining, "x")  && moment(remaining, "x") < DEADLINE_MOD) {
          return (
            <YellowContainer>
              <Countdown valueStyle={stylesCountDown} value={record} onFinish={onFinish} />
            </YellowContainer>
          );
        }
        if (moment(remaining, "x") > DEADLINE_MOD) {
          return (
            <GreenContainer>
              <Countdown valueStyle={stylesCountDown} value={record} onFinish={onFinish} />
            </GreenContainer>
          );
        }
      },
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
            onClick={() => editBed(record.id)}
          >
            Editar
          </Button>
          <Button
            type="danger"
            size="large"
            onClick={() => deleteBed(record.id)}
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

const GreenContainer = styled.div`
  background-color: #00ff0080;
  padding: 6px;
  border-radius: 4px;
`;
const YellowContainer = styled.div`
  background-color: #ffff0080;
  padding: 6px;
  border-radius: 4px;
`;
const RedContainer = styled.div`
  background-color: #ff4d4f80;
  padding: 6px;
  border-radius: 4px;
`;

const stylesCountDown = {
  fontWeight: "bold",
  fontSize: 14,
};
