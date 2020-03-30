const express = require("express");
const app = express();
const fs = require("fs");

const url = "../data/data.json";
const data = fs.readFileSync(url, "utf-8");

app.get("/", (req, res) => {
  res.send(JSON.parse(data));
});

app.listen(8080, () => {
  console.log("El servidor está inicializado en el puerto 8080");
});