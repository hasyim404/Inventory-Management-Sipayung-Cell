import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import KelolaBarang from "./pages/Kelola Barang/KelolaBarang";
import MerkProduk from "./pages/Kelola Produk/MerkProduk";
import Kategori from "./pages/Kelola Produk/Kategori";
import Ukuran from "./pages/Kelola Produk/Ukuran";
import LaporanKeuangan from "./pages/Laporan Keuangan/LaporanKeuangan";
import Blank from "./pages/Blank";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kelola-barang" element={<KelolaBarang />} />
          <Route path="kelola-merk-produk" element={<MerkProduk />} />
          <Route path="kelola-kategori" element={<Kategori />} />
          <Route path="kelola-ukuran" element={<Ukuran />} />
          <Route path="laporan-keuangan" element={<LaporanKeuangan />} />
          <Route path="*" element={<Blank />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
