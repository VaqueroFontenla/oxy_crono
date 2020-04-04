import React from "react";
import { Form, Input, InputNumber, TimePicker } from "antd";
import styled from "styled-components";
import { Col } from "./grid/Col";
import { Row } from "./grid/Row";

export const FormPatient = ({form, layout}) => {
  return (
    <Form form={form} layout={layout}>
      <Container>
        <Row>
          <Col span={24}>
            <Form.Item name="name" label="Nombre">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={8}>
            <Form.Item name= "bed" label="Nº cama">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item name="start" label="Hora de inicio">
              <TimePicker format={"HH:mm"} placeholder="Seleccione la hora" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item name="press" label="Presión (bar)">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="volume" label="Volumen (l)">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="flow" label="Caudal (m/l)">
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

const Container = styled.div`
  padding: 12px;
`;
