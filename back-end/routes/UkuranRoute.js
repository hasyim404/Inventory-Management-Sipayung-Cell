const express = require("express");
const routes = express();
const { getUkuran, createUkuran } = require("../controller/UkuranController");

routes.get("/ukuran", getUkuran);
routes.post("/ukuran", createUkuran);

module.exports = routes;
