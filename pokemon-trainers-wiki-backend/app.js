const express = require("express");

const app = express();

app.listen(3000);

// API REST (METHODS GET PUT DELETE UPDATE )
app.get("/", (req, res) => {
  //   console.log(req);
  console.log("Petición recibida...en /");
  res.send("<h1> HOME PAGE </h1>");
});

app.post("/", (req, res) => {
  console.log(req);
});

app.post("/home", (req, res) => {
  console.log(req);
});
