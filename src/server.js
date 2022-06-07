"use strict";
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
app.use(express.json());

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const logger = require("./middleware/logger");

const userRoutes = require("./routes/users");
const foodRoutes = require("./routes/food");
const clothesRoutes = require("./routes/clothes");

app.get("/", (req, res) => {
  res.status(200).send("server is working");
});
app.use(userRoutes);
app.use(foodRoutes);
app.use(clothesRoutes);

app.use(logger);

app.use("*", notFoundHandler);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Listen and Running on port ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
