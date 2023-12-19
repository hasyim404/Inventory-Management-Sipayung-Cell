import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// console.log(localStorage.getItem("token"));

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              isAuthenticated() ? <Navigate to={"/dashboard"} /> : <LoginPage />
            }
          />
          <Route
            path="/"
            element={
              isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/kelola-barang"
            element={
              isAuthenticated() ? <KelolaBarang /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/kelola-barang-edit"
            element={
              isAuthenticated() ? (
                <EditKelolaBarang />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/kelola-merk"
            element={
              isAuthenticated() ? <MerkProduk /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/kelola-merk-edit"
            element={
              isAuthenticated() ? <EditMerk /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/kelola-kategori"
            element={
              isAuthenticated() ? <Kategori /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/kelola-kategori-edit"
            element={
              isAuthenticated() ? <EditKategori /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/kelola-ukuran"
            element={isAuthenticated() ? <Ukuran /> : <Navigate to="/login" />}
          />
          <Route
            path="/kelola-ukuran-edit"
            element={
              isAuthenticated() ? <EditUkuran /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/laporan-pemasukan"
            element={
              isAuthenticated() ? (
                <LaporanPemasukan />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/laporan-pengeluaran"
            element={
              isAuthenticated() ? (
                <LaporanPengeluaran />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/kelola-users"
            element={
              isAuthenticated() ? <KelolaUsers /> : <Navigate to="/login" />
            }
          />
          <Route
            path="*"
            element={isAuthenticated() ? <Blank /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
