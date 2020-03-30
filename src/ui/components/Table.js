import React from "react";
import { Row } from "./Row";
import PropTypes from "prop-types";

export const Table = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre del paciente</th>
            <th scope="col">Número de camas</th>
            <th scope="col">Hora Inicio</th>
            <th scope="col">Presión Botella</th>
            <th scope="col">Caudal</th>
            <th scope="col">Duración</th>
            <th scope="col">Hora Fin</th>
            <th scope="col">Tiempo restante</th>
          </tr>
        </thead>
        <tbody>{data.map((item, key) => <Row key={item.id} item={item}/>)}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
