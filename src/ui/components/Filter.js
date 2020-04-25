import { Input } from "antd";
import React from "react";
import styled from "styled-components";

export const Filter = ({ currentFilterValue, onChangeFilter }) => {
  return (
    <Input
      placeholder="Search Name"
      value={currentFilterValue}
      onChange={onChangeFilter}
      allowClear={true}
    />
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
