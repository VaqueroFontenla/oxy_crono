import React, {useEffect} from "react";
import { Form, Modal as ADModal } from "antd";
import { FormPatient } from "./Form";

export const Modal = ({ visible, onCreate, onCancel, data }) => {
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
            form.resetFields();
            onCreate(values);
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
