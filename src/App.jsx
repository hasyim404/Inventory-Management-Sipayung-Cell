import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/preline/dist/preline";

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kelola-barang" element={<KelolaBarang />} />
          <Route path="/kelola-produk/merk-produk" element={<MerkProduk />} />
          <Route path="/kelola-produk/kategori" element={<Kategori />} />
          <Route path="/kelola-produk/ukuran" element={<Ukuran />} />
          <Route path="/laporan-keuangan" element={<LaporanKeuangan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
