import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import Navbar from "../../../components/Navbar/Navbar";
import MainTitle from "../../../components/MainTitle";
import Subnav from "../../../components/Subnav";

const EditKategori = () => {
  const [kategori, setKategori] = useState([]);
  const [n_kategori, setN_kategori] = useState("");
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    getKategori();
  }, []);

  // Get all data
  const getKategori = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/kategori");
    setKategori(response.data.data);
  };

  // Add data
  const addKategori = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1023/api/v1/kategori", {
        n_kategori,
        catatan,
      });

      Swal.fire({
        title: "Tambah Data Kategori Berhasil!",
        text: "Berhasil menambahkan data kategori baru!",
        icon: "success",
      });
      getKategori();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Gagal tambah data!",
        text: "Gagal menambahkan data kategori",
        icon: "error",
      });
    }
  };

  // const getKategoriById = async () => {
  //   const response = await axios.get(
  //     `http://localhost:1023/api/v1/kategori/${id}`
  //   );
  //   setN_kategori(response.data.n_kategori);
  //   setCatatan(response.data.catatan);
  // };

  // Delete
  const deleteKategori = async (id) => {
    try {
      await axios.delete(`http://localhost:1023/api/v1/kategori/${id}`);
      Swal.fire({
        title: "Berhasil!",
        text: "Hapus data Berhasil dilakukan!",
        icon: "success",
      });
      getKategori();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Hapus data gagal!",
        text: "Gagal menghapus data kategori",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar active="active" display="block" />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <MainTitle size="text-3xl" main="Kelola Produk" />
        <p className="mb-2 text-md font-normal text-color-4">
          {" "}
          <Link className="text-color-4" to="/dashboard">
            Dashboard{" "}
          </Link>
          / <span className="text-color-5 italic">Kelola Produk </span>/
          <span className="xt-color-5 italic"> Kategori</span>
        </p>

        {/* Content */}
        <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
          <div className="mt-6 ">
            <div className="flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
              <div className="p-4 md:p-5">
                <div className="grid grid-flow-col gap-4 place-content-between">
                  <div className="col-span-3">
                    <MainTitle size="text-xl" main="Daftar Kategori" />
                    <Subnav
                      subnav="Berisi daftar seluruh kategori"
                      color="text-color-4"
                    />
                  </div>
                  <div className="col-span-7 flex justify-end">
                    <div className="py-2 px-3">
                      <div className="relative max-w-xs">
                        <label className="sr-only">Search</label>
                        <input
                          type="text"
                          name="hs-table-with-pagination-search"
                          className="py-2 px-3 ps-9 block w-full border border-color-1 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-color-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-1"
                          placeholder="Cari Kategori..."
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-5">
                  <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                      <div className="border rounded-lg">
                        <div className="overflow-hidden"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditKategori;
