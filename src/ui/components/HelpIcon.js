import React from "react";
import styled from "styled-components";
import { QuestionOutlined } from "@ant-design/icons";
export const HelpIcon = ({onClick}) => {

  return <Container onClick={onClick}><QuestionOutlined /></Container>;
};

const Container = styled.div`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  color: #1890ff;
  text-align: center;
  font-size: 18px;
  border: solid 2px #1890ff;
  border-radius: 500px;
`;
