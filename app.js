const express = require("express");
const morgan = require("morgan");

const tourRoutes = require("./routes/tourRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tour", tourRoutes);

module.exports = app;
