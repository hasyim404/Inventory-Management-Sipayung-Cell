const express = require("express");
const app = express();

const users = require("./UserRoute");
const barang = require("./BarangRoute");
const kategori = require("./KategoriRoute");
const merk = require("./MerkRoute");
const ukuran = require("./UkuranRoute");

const apiUrl = "/api/v1";

app.use(apiUrl, users);
app.use(apiUrl, barang);
app.use(apiUrl, kategori);
app.use(apiUrl, merk);
app.use(apiUrl, ukuran);

module.exports = app;
