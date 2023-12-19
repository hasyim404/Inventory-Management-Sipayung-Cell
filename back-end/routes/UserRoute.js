const express = require("express");
const routes = express();
const {
  getUsers,
  findUserById,
  deleteUsers,
} = require("../controller/UserController");

routes.get("/users", getUsers);
routes.get("/users/:id", findUserById);
routes.delete("/users/:id", deleteUsers);

module.exports = routes;
