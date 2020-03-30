import React from "react";

export const Row = ({ item }) => {
  return (
    <tr>
      <th scope="row">{item.patient_name}</th>
      <td>{item.bed_number}</td>
      <td>{item.start_time}</td>
      <td>{item.press_tank}</td>
      <td>{item.liters}</td>
      <td>{item.flow}</td>
      <td>{(item.press_tank * item.liters_tank) / item.flow}</td>
      <td>{item.start_time}</td>
      <td>{item.start_time}</td>
    </tr>
  );
};
