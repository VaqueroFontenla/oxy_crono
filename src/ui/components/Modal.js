import React, { StrictMode } from "react";
import styled from "styled-components";
import { Modal as ADModal } from "antd";

export const Modal = ({ visible, onClose, children }) => {
  console.log(visible);
  return (
    <StrictMode>
      <Wrapper>
        <ADModal
          title="Añade paciente"
          visible={visible}
          // maskStyle={{ backdropFilter: "blur(3px)" }}
          onCancel={onClose}
        >
          <p>Random text</p>
          <p>Random text 2</p>
          <p>Random text 3</p>
          {children}
        </ADModal>
      </Wrapper>
    </StrictMode>
  );
};

const Wrapper = styled.div``;
