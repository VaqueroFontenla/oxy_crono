import React, { useEffect, useState } from "react";
import "../stylesheets/App.css";
import axios from 'axios';
// import Loading from "./Loading";
import {Table} from "./Table";
import { Date } from "./Date";
import { Time } from "./Time";

const App = () => {
  const url = "http://localhost:8080/";
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  // if (isLoading) {
  // }
  useEffect(() => {
    const fechtData = async () => {
      setError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setError(true);
      }

      setIsLoading(false);
    };

    fechtData();
  }, []);
  return (
    <div className="wrapper">
          <Date />
          <Time />
      <div className="table__wrapper">
  
        {/* <div className="table"> */}
          {/* {isLoading && <Loading />} */}
          {/* {!isLoading && ( */}
          {/* <Table data={data} /> */}
          {/* )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
