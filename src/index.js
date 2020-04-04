import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./ui/views/App";
import * as serviceWorker from "./serviceWorker";
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';

ReactDOM.render(
  <>
    <ConfigProvider locale={esES}>
      <App />
    </ConfigProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
