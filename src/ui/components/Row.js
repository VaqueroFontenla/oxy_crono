import React, { useEffect, useState } from "react";
import moment from 'moment'


export const Row = ({ item }) => {
  const [duration, setDuration] = useState(null);

  // if (isLoading) {
  // }
  useEffect(() => {
    const buildDuration = (press, liters, flow) => {
      const duration = moment((press * liters) / flow).format('LTS');
      console.log(duration)
      setDuration(duration);
    }
    buildDuration(item.press_tank, item.liters_tank, item.flow);
  }, []);
  return (
    <tr>
      <th scope="row">{item.patient_name}</th>
      <td>{item.bed_number}</td>
      <td>{item.start_time}</td>
      <td>{item.press_tank}</td>
      <td>{item.liters_tank}</td>
      <td>{item.flow}</td>
      <td>
        {duration}
      </td>
      <td></td>
      <td></td>
    </tr>
  );
};
