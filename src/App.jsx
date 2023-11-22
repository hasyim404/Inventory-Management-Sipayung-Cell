import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/preline/dist/preline";

import Dashboard from "./pages/Dashboard/Dashboard";
import KelolaBarang from "./pages/Kelola Barang/KelolaBarang";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kelola-barang" element={<KelolaBarang />} />
          {/* <Route path="/kelola-produk/merk-produk" element={<KelolaMerk />} />
          <Route path="/kelola-produk/kategori" element={<KelolaKategori />} />
          <Route path="/kelola-produk/ukuran" element={<KelolaUkuran />} />
          <Route path="/laporan-keuangan" element={<KelolaKeuangan />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
