import { Form, Input, InputNumber, TimePicker } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Col } from "./grid/Col";
import { Row } from "./grid/Row";

export const FormPatient = ({ form, layout, data }) => {

  useEffect(() => {
    form.setFieldsValue({
      name: data ? data.name : undefined,
      bed: data ? data.bed : undefined,
      start: data ? moment(data.start) : undefined,
      press: data ? data.press : undefined,
      volume: data ? data.volume : undefined,
      flow: data ? data.flow : undefined,
    });
  }, [form, data]);

  return (
    <Form form={form} layout={layout}>
      <Container>
        <Row>
          <Col span={24}>
            <Form.Item name="name" label="Nombre" valuePropName={form.name}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={8}>
            <Form.Item name="bed" label="Nº cama" value={form.bed}>
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              name="start"
              label="Hora de inicio"
              value={form.start}
            >
              <TimePicker format={"HH:mm"} placeholder="Seleccione la hora" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item name="press" label="Presión (bar)" value={form.press}>
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="volume" label="Volumen (l)" value={form.volume}>
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="flow" label="Caudal (m/l)" value={form.flow}>
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


