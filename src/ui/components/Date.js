import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";

export const Date = () => {
  const [currentDate, setCurrentDate] = useState("");
  return (
    <div className="date-picker">
      <DatePicker
        format={"DD-MM-YYYY"}
        defaultValue={() => setCurrentDate(moment().format("DD-MM-YYYY"))}
        placeholder="Seleccione la fecha"
      />
    </div>
  );
};
