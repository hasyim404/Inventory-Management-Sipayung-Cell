import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import KelolaBarang from "./pages/Kelola Barang/KelolaBarang";

import MerkProduk from "./pages/Kelola Produk/MerkProduk";
import EditMerk from "./pages/Kelola Produk/Edit/EditMerk";
import Kategori from "./pages/Kelola Produk/Kategori";
import EditKategori from "./pages/Kelola Produk/Edit/EditKategori";
import Ukuran from "./pages/Kelola Produk/Ukuran";
import EditUkuran from "./pages/Kelola Produk/Edit/EditUkuran";
import LaporanPemasukan from "./pages/Laporan Keuangan/Pemasukan";
import LaporanPengeluaran from "./pages/Laporan Keuangan/Pengeluaran";
import KelolaUsers from "./pages/Kelola Users/KelolaUsers";
import Blank from "./pages/Blank";

import LoginPage from "./pages/Login/LoginPage";
import { UserProvider } from "./context/UserContext";
import EditKelolaBarang from "./pages/Kelola Barang/EditKelolaBarang";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kelola-barang" element={<KelolaBarang />} />
          <Route path="/kelola-barang-edit" element={<EditKelolaBarang />} />

          <Route path="/kelola-merk" element={<MerkProduk />} />
          <Route path="/kelola-merk-edit" element={<EditMerk />} />
          <Route path="/kelola-kategori" element={<Kategori />} />
          <Route path="/kelola-kategori-edit" element={<EditKategori />} />
          <Route path="/kelola-ukuran" element={<Ukuran />} />
          <Route path="/kelola-ukuran-edit" element={<EditUkuran />} />

          <Route path="/laporan-pemasukan" element={<LaporanPemasukan />} />
          <Route path="/laporan-pengeluaran" element={<LaporanPengeluaran />} />

          <Route path="/kelola-users" element={<KelolaUsers />} />
          <Route path="*" element={<Blank />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
