import { Statistic } from "antd";
import moment from "moment";
import React from "react";
import styled from "styled-components";

export const CountdownCell = (record) => {
  const { Countdown } = Statistic;

  const DEADLINE_DANGER = 7200000;
  const DEADLINE_MOD = 10800000;

  function onFinish() {
    console.log("finished!");
  }
  const remaining = record - moment();
  if (moment(remaining, "x") < DEADLINE_DANGER) {
    return (
      <RedContainer>
        <Countdown
          valueStyle={stylesCountDown}
          value={record}
          onFinish={onFinish}
        />
      </RedContainer>
    );
  }
  if (
    DEADLINE_DANGER < moment(remaining, "x") &&
    moment(remaining, "x") < DEADLINE_MOD
  ) {
    return (
      <YellowContainer>
        <Countdown
          valueStyle={stylesCountDown}
          value={record}
          onFinish={onFinish}
        />
      </YellowContainer>
    );
  }
  if (moment(remaining, "x") > DEADLINE_MOD) {
    return (
      <GreenContainer>
        <Countdown
          valueStyle={stylesCountDown}
          value={record}
          onFinish={onFinish}
        />
      </GreenContainer>
    );
  }
};
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
