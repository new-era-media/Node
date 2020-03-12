const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let test = "Данные полученные с сервера";

// const TestVar = {
//   name: "Ivan"
// };

app.get("/api/test", function(req, res) {
  //   res.json(TestVar); // если передается объект, то только через json
  res.send({ test });
});

app.post("/api/", function(req, res) {
  console.log(req.body);
  res.end('Данные получены сервером') // - ответ клиенту что данные получены так же как и строка сверху
});

module.exports = app;
