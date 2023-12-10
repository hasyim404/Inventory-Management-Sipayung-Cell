const express = require("express");
const routes = express();
const { getMerk, createMerk } = require("../controller/MerkController");

routes.get("/merk", getMerk);
routes.post("/merk", createMerk);

module.exports = routes;
