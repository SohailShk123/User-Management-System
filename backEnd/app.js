const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
const origin = ["*"];
app.use(cors({ origin }));

module.exports = app;
