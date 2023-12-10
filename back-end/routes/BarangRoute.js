const express = require("express");
const routes = express();
const { getBarang, createBarang } = require("../controller/BarangController");

routes.get("/barang", getBarang);
routes.post("/barang", createBarang);

module.exports = routes;
