import React from "react";
import moment from 'moment';
import styled from "styled-components";

export const Clock = () => {
    
  return (
    <Wrapper>
        {moment().format('LT')}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
`
