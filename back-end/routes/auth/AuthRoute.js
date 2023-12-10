const express = require("express");
const routes = express();
const { register } = require("../../controller/auth/AuthController");

routes.post("/register", register);

module.exports = routes;
