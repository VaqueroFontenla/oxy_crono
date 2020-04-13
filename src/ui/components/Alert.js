import { Modal as ADModal } from "antd";
import React from "react";

export const Alert = ({ visible, onDelete, onCancel }) => {

  return (
    <ADModal
      title="Añadir paciente"
      visible={visible}
      okText="Eliminar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={onDelete}
    >
      ¿Estás seguro que quieres eliminar este registro?
    </ADModal>
  );
};
