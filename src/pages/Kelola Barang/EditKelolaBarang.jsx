import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import ModalImage from "react-modal-image";

import MainTitle from "../../components/MainTitle";
import Navbar from "../../components/Navbar/Navbar";
import Subnav from "../../components/Subnav";

const EditKelolaBarang = () => {
  // Edit data barang
  const EditForm = ({
    editItem,
    setEditItem,
    merkSelected,
    setMerkSelected,
    kategoriSelected,
    setKategoriSelected,
    ukuranSelected,
    setUkuranSelected,
    n_barang,
    setNBarang,
    jml_stok,
    setJmlStok,
    tipe_stok,
    setTipeStok,
    h_beli,
    setHBeli,
    h_jual,
    setHJual,
    img,
    setImg,
    getBarang,
  }) => {
    const saveEditedBarang = async () => {
      try {
        await axios.put(`http://localhost:1023/api/v1/barang/${editItem.id}`, {
          n_barang,
          jml_stok,
          tipe_stok,
          h_beli,
          h_jual,
          merk_id: merkSelected.id,
          img,
          kategori_id: kategoriSelected.id,
          ukuran_id: ukuranSelected.id,
        });

        // Lakukan operasi lain setelah berhasil menyimpan perubahan
        // ...

        // Sembunyikan formulir edit dan dapatkan ulang data barang
        setEditItem(null);
        getBarang();
      } catch (error) {
        console.error("Error saving edited data:", error);
      }
    };

    const cancelEdit = () => {
      // Sembunyikan formulir edit
      setEditItem(null);
    };

    useEffect(() => {
      // Set nilai awal untuk input dan textarea saat editItem berubah
      if (editItem) {
        setMerkSelected({ id: editItem.merk_id, nama: editItem.nama_merk });
        setKategoriSelected({
          id: editItem.kategori_id,
          nama: editItem.nama_kategori,
        });
        setUkuranSelected({
          id: editItem.ukuran_id,
          nama: editItem.nama_ukuran,
        });
        setNBarang(editItem.n_barang);
        setJmlStok(editItem.jml_stok);
        setTipeStok(editItem.tipe_stok);
        setHBeli(editItem.h_beli);
        setHJual(editItem.h_jual);
        setImg(editItem.img);
      }
    }, [
      editItem,
      setMerkSelected,
      setKategoriSelected,
      setUkuranSelected,
      setNBarang,
      setJmlStok,
      setTipeStok,
      setHBeli,
      setHJual,
      setImg,
    ]);
  };
  return (
    <>
      <Navbar active1="active" />
      <div className="w-full pt-10 pb-20 px-4 sm:px-6 md:px-8 lg:ps-72">
        <MainTitle size="text-3xl" main="Kelola Barang" />
        <p className="text-md font-normal text-color-4">
          <Link color="text-color-4" to="/dashboard">
            Dashboard{" "}
          </Link>
          /{" "}
          <Link color="text-color-4" to="/kelola-barang">
            Kelola Barang{" "}
          </Link>
          /{" "}
          <span color="text-color-5" className="italic">
            Edit Barang
          </span>
        </p>

        {/* Content */}
        <div className="">
          <form action="#" className="">
            <div className="sm:p-5 overflow-y-auto ">
              <div className="flex p-5 gap-x-4 md:gap-x-7 bg-color-6">
                <div className="grow">
                  <div className="mt-10 grid grid-cols-10 gap-3">
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Nama barang{" "}
                        <span className="italic text-color-warning">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="hs-leading-icon"
                          className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                          placeholder="Kabel Data ANKER Micro USB"
                        />
                      </div>
                    </div>
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Harga Beli{" "}
                        <span className="italic text-color-warning">*</span>
                      </label>
                      <div className="relative">
                        <div className="flex rounded-lg shadow-sm">
                          <div className="px-3.5 inline-flex items-center min-w-fit rounded-s-md border border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-gray-400 dark:focus:ring-color-2">
                            <span className="text-sm text-color-4 font-semibold">
                              Rp.
                            </span>
                          </div>
                          <input
                            type="text"
                            name="hs-input-with-add-on-url"
                            className="py-3 px-4 pe-11  block w-full border-color-3 shadow-sm rounded-e-md text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                            placeholder="24600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-10 gap-3">
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Jumlah Stok{" "}
                        <span className="italic text-color-warning">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="hs-leading-icon"
                          className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                          placeholder="30"
                        />
                        <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
                          <label
                            htmlFor="hs-inline-leading-select-currency"
                            className="sr-only"
                          >
                            satuan barang
                          </label>
                          <select
                            id="hs-inline-leading-select-currency"
                            name="hs-inline-leading-select-currency"
                            className="py-3 pl-7 border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-color-4 font-semibold dark:focus:ring-color-2"
                          >
                            <option>-/pcs</option>
                            <option>-/paket</option>
                            <option>-/set</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Harga Jual{" "}
                        <span className="italic text-color-warning">*</span>
                      </label>
                      <div className="relative">
                        <div className="flex rounded-lg shadow-sm">
                          <div className="px-3.5 inline-flex items-center min-w-fit rounded-s-md border border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-gray-400 dark:focus:ring-color-2">
                            <span className="text-sm text-color-4 font-semibold">
                              Rp.
                            </span>
                          </div>
                          <input
                            type="text"
                            name="hs-input-with-add-on-url"
                            className="py-3 px-4 pe-11  block w-full border-color-3 shadow-sm rounded-e-md text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                            placeholder="30000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-10 gap-3">
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Merk{" "}
                        <span className="italic text-color-warning">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="hs-select-label"
                          defaultValue={"DEFAULT"}
                          className="py-3 px-4 pe-9 block w-full  border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                        >
                          <option value="DEFAULT">Pilih merk</option>
                          <option selected value="">
                            ANKER
                          </option>
                          <option value="">Xiaomi</option>
                          <option value="">Robot</option>
                          <option value="">Simpati</option>
                          <option value="">Indosat</option>
                          <option value="">Xl</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Upload Gambar
                      </label>
                      <div className="relative  rounded-md bg-color-2 ">
                        <div className="flex items-center">
                          <ModalImage
                            className="w-24 p-1 rounded-s-md border border-color-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-gray-400 dark:focus:ring-color-2"
                            small={`./src/assets/voucher.png`}
                            medium={`./src/assets/voucher.png`}
                            hideDownload
                          />

                          <input
                            type="file"
                            className="block bg-color-6 mr-2 w-full text-sm text-gray-500 file:me-4 file:py-1.5 file:px-2.5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-color-1 file:text-white hover:file:bg-6hover file:disabled:opacity-50 file:cursor-pointe border-color-3 focus:z-10 focus:border-color-2 dark:focus:ring-color-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Kategori{" "}
                        <span className="italic text-color-warning">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="hs-select-label"
                          className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                        >
                          <option value="DEFAULT">Pilih Kategori</option>
                          <option selected value="">
                            Kabel Data
                          </option>
                          <option value="">Aksesoris</option>
                          <option value="">Casing HP</option>
                          <option value="">Charger</option>
                          <option value="">Kartu Perdana</option>
                          <option value="">Tempered Glass</option>
                          <option value="">Pulsa</option>
                          <option value="">Lainnya</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-10 gap-3">
                    <div className="col-span-5">
                      <label
                        htmlFor="hs-leading-icon"
                        className="block text-md font-medium mb-2 dark:text-color-5"
                      >
                        Ukuran
                      </label>
                      <div className="relative">
                        <select
                          id="hs-select-label"
                          defaultValue={"DEFAULT"}
                          className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                        >
                          <option value="DEFAULT">Pilih Ukuran</option>
                          <option selected value="">
                            -
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-x-2 py-3 px-4 ">
              <button
                type="button"
                className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-color-5  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-200 dark:border-color-5dark:text-color-5 dark:hover:bg-zinc-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-color-5"
                data-hs-overlay="#hs-danger-alert"
              >
                Kembali
              </button>
              <button className="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none ">
                Edit Barang
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* MODALS FORM EDIT */}
      <div
        id="hs-danger-alert"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[70] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-10  hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
          <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden dark:bg-color-3 ">
            <div className="absolute top-2 m-3 end-2">
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-md font-semibold rounded-lg border border-transparent text-color-5 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:border-transparent  dark:focus:outline-none "
                data-hs-overlay="#hs-danger-alert"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditKelolaBarang;
