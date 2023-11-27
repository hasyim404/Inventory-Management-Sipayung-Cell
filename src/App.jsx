import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import KelolaBarang from "./pages/Kelola Barang/KelolaBarang";
import MerkProduk from "./pages/Kelola Produk/MerkProduk";
import Kategori from "./pages/Kelola Produk/Kategori";
import Ukuran from "./pages/Kelola Produk/Ukuran";
import LaporanKeuangan from "./pages/Laporan Keuangan/LaporanKeuangan";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="kelola-barang" element={<KelolaBarang />} />
        <Route path="kelola-merk-produk" element={<MerkProduk />} />
        <Route path="kelola-kategori" element={<Kategori />} />
        <Route path="kelola-ukuran" element={<Ukuran />} />
        <Route path="laporan-keuangan" element={<LaporanKeuangan />} />
      </Routes>
    </>
  );
};

export default App;
