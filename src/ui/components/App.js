import React, { useEffect, useState } from "react";
import "../stylesheets/App.css";
import axios from 'axios';
// import Loading from "./Loading";
import Table from "./Table";

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
    <div className="container-fluid">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="row">
          {/* {isLoading && <Loading />} */}
          {/* {!isLoading && ( */}
          <Table data={data} />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default App;
