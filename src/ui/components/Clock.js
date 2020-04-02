import React from "react";
import moment from "moment";
import styled from "styled-components";

export const Clock = () => {
  return <Wrapper>{moment().format("LT")}</Wrapper>;
};

const Wrapper = styled.div`
  height: 50px;
  width: 200px;
  color: #1890ff;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  border: solid 2px #1890ff;
  border-radius: 5px;
`;
