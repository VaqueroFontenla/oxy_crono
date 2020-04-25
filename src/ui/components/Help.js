import { Modal as ADModal } from "antd";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Divider } from "antd";

export const Help = ({ visible, onCancel }) => {
  return (
    <ADModal
      title={<Title>Ayuda</Title>}
      visible={visible}
      footer={null}
      width={920}
      closable={false}
    >
      El objetivo de esta aplicación es poder monitorizar bombones o botellas de
      oxígeno y poder controlar el tiempo de uso de cada una. Este tiempo de uso
      se calcula en función de algunos parámetros, como son, la presión a la que
      quiero aplicar el oxígeno, el volumen de la bombona y el caudal.
      <br />
      <br />
      <Wrapper>
        <h2>¿Cómo funciona?</h2>
        <h3>Añadir un registro(paciente)</h3>
        <ol>
          <li>
            1. Pulsar sobre botón <strong>"Añadir paciente"</strong> situado en
            la esquina superior derecha del panel principal.
          </li>
          <li>
            2. Se desplegará un formulario donde debes añadir los datos para
            monitonizar un bombona en concreto.
          </li>
          <li>
            3. Recuerda introducir los datos en la unidades correctas:
            <ul>
              <li>
                - Unidad de presión: <strong>bar</strong>
              </li>
              <li>
                - Unidad de volumen: <strong>litros</strong>
              </li>
              <li>
                - Unidad de caudal: <strong>litros/minuto</strong>
              </li>
            </ul>
          </li>
        </ol>
        <h3>Eliminar registro</h3>
        <ol>
          <li>
            1. Pulsar sobre el botón <strong>"Eliminar"</strong> del registro en
            concreto que quieres eliminar.
          </li>
          <li>2. Se desplegará un model de confirmación.</li>
          <li>3. Pulsa "Eliminar"</li>
        </ol>
        <h3>Actualizar registro registro</h3>
        <ol>
          <li>
            1. Pulsar sobre el botón <strong>"Editar"</strong> del registro en
            concreto que quieres actualizar.{" "}
          </li>
          <li>2. Se desplegará de nuevo el formulario.</li>
          <li>3. Modifica el campo del formulario que quieras actualizar</li>
          <li>4. Pulsa "Actualizar"</li>
        </ol>
        <h3>Ordenar registros</h3>
        Los registros estań ordenados en funcioń del tiempo restante y en
        sentido ascendente por defecto. Esto quiere decir que se colocarán
        primero los registros cuyas bombonas o botellas de oxígeno están próxima
        a acabarse. Puedes cambiar el orden de los registros por{" "}
        <strong>Nombre</strong>, <strong>Nº de cama</strong>,{" "}
        <strong>Hora de inicio</strong> y <strong>Tiempo restante</strong>,
        pulsando sobre el nombre del campo.
        <br />
        <br />
        <h3>Filtrar registros</h3>
        Existe la posibilidad de filtrar por <strong>Nombre</strong> y{" "}
        <strong>Nº de cama</strong>. Esto nos permite buscar un registro
        (paciente o cama) en concreto.
        <br />
        Para eso pulsa en el icono de <strong>lupa</strong> que existe en el
        nombre de los respectivos campos.
      </Wrapper>
      <Divider />
      <Footer>
        <Button type="primary" size="large" onClick={onCancel}>
          Cerrar
        </Button>
      </Footer>
    </ADModal>
  );
};

const Wrapper = styled.div`
  max-height: 500px;
  padding-right: 50px;
  overflow-y: scroll;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.div`
  display: flex;
  align-content: center;
  padding:5px;
  font-size: 28px;
  font-weight: 500;
`;
