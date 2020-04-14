import { Form, Modal as ADModal } from "antd";
import React from "react";
import { FormPatient } from "./Form";

export const Modal = ({ visible, onCreate, onUpdate, onCancel, data }) => {
  const [form] = Form.useForm();

  return (
    <ADModal
      title="Añadir paciente"
      visible={visible}
      okText= {data ? "Actualizar": "Guardar"}
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            data ? onUpdate(values) : onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <FormPatient form={form} layout="vertical" data={data}/>
    </ADModal>
  );
};
