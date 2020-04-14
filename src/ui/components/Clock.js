import React,{ useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

export const Clock = () => {
  const [, forceUpdate] = useState();
  useEffect(() => {
    setTimeout(forceUpdate, 60000);
  }, []);
  return <Container>{moment().format("LT")}</Container>;
};

const Container = styled.div`
  height: 50px;
  width: 200px;
  color: #1890ff;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  border: solid 2px #1890ff;
  border-radius: 5px;
`;
