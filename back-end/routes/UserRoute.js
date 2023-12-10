const express = require("express");
const routes = express();
const { getUsers, deleteUsers } = require("../controller/UserController");

routes.get("/users", getUsers);
routes.delete("/users/:id", deleteUsers);
// routes.post("/users", createUsers);

module.exports = routes;
