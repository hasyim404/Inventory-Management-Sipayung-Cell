const jwt = require("jsonwebtoken");

const jwtSecret = "lalapanEnaknyaPakeSambel_21";
const jwtAlgorithm = "HS256";
const jwtExpiresIn = "12h";

module.exports = {
  jwt,
  jwtSecret,
  jwtAlgorithm,
  jwtExpiresIn,
};
