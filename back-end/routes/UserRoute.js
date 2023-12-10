const express = require("express");
const routes = express();
const { getUsers, createUsers } = require("../controller/UserController");

routes.get("/users", getUsers);
routes.post("/users", createUsers);

module.exports = routes;
