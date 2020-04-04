import React from "react";
import styled from "styled-components";
import { Modal as ADModal } from "antd";
import { Form, Input, InputNumber, TimePicker } from "antd";
import {FormPatient} from './Form'
export const Modal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
      <ADModal
        title="Añadir paciente"
        visible={visible}
        okText="Guardar"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              debugger;
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <FormPatient  form={form} layout="vertical"/ >
      </ADModal>
  );
};

const Container = styled.div``;
