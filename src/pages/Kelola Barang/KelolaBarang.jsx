import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";

// Data
import items from "../../utils/constants/barang";

const KelolaBarang = () => {
  const theads = [
    {
      judul: "No",
    },
    {
      judul: "Nama Barang",
    },
    {
      judul: "Stok",
    },
    {
      judul: "Kategori",
    },
    {
      judul: "Harga Beli",
    },
    {
      judul: "Harga Jual",
    },
    {
      judul: "Gambar",
    },
    {
      judul: "Action",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <h1 className="block text-2xl font-bold sm:text-3xl text-color-5">
          Kelola Barang
        </h1>
        <p className="mb-2 text-sm font-normal text-color-4">
          {" "}
          <Link to="/">Dashboard </Link>/{" "}
          <span className="italic">Kelola Barang</span>
        </p>

        {/* Content */}
        <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
          <div className="mt-6 ">
            <div className="flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
              <div className="p-4 md:p-5">
                <div className="grid grid-flow-col gap-4 place-content-between">
                  <div className="col-span-3">
                    <p className="text-xl font-bold sm:text-xl text-color-5">
                      Data Barang
                    </p>
                    <p className="mb-2 text-md font-normal text-color-4">
                      Berisi daftar dari semua barang
                    </p>
                  </div>
                  <div className="col-span-7 flex justify-end">
                    <div className="py-2 px-3">
                      <div className="relative max-w-xs">
                        <label className="sr-only">Search</label>
                        <input
                          type="text"
                          name="hs-table-with-pagination-search"
                          className="py-2 px-3 ps-9 block w-full border border-color-1 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-color-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-1"
                          placeholder="Cari Barang..."
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

                    <div className="py-1 px-2">
                      {/* <button
                        type="button"
                        className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-color-1 text-color-6 shadow-sm hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                      >
                        Export <FontAwesomeIcon icon={faCaretDown} />
                      </button> */}

                      <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                        <button
                          id="hs-dropdown"
                          type="button"
                          className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-1  dark:text-white dark:hover:bg-6hover"
                        >
                          Export Data
                          <svg
                            className="hs-dropdown-open:rotate-180 w-4 h-4"
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
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-color-1 "
                          aria-labelledby="hs-dropdown"
                        >
                          <a
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-color-6 dark:hover:bg-6hover dark:hover:text-color-6 dark:focus:bg-gray-700"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faFilePdf} /> PDF
                          </a>
                          <a
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-color-6 dark:hover:bg-6hover dark:hover:text-color-6 dark:focus:bg-gray-700"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faFileExcel} /> Excel
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="py-1 2">
                      <button
                        type="button"
                        className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-color-1 text-color-6 shadow-sm hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                        data-hs-overlay="#hs-tambah-alert"
                      >
                        + Tambah Barang
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-5">
                  <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                      <div className="border rounded-lg">
                        <div className="overflow-hidden">
                          <table className="table-fixed md:table-fixed min-w-full divide-y ">
                            <thead className=" dark:bg-color-6">
                              <tr>
                                {theads.map((thead, index) => (
                                  <th
                                    key={index}
                                    scope="col"
                                    className="py-3 text-sm font-bold text-color-5 uppercase"
                                  >
                                    {thead.judul}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {items.map((item, index) => (
                                <tr key={item.id} className="text-center ">
                                  <td className="py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                    {index + 1}.
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                    {item.nama}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.stok.jml} -/{item.stok.tipe}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.kategori}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    Rp. {item.h_beli}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    Rp. {item.h_jual}
                                  </td>
                                  <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                    <ModalImage
                                      className="w-20 border border-color-2 shadow-sm rounded-sm"
                                      small={`./src/assets/${item.gambar}`}
                                      medium={`./src/assets/${item.gambar}`}
                                      hideDownload
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    <div className="text-center">
                                      <button
                                        type="button"
                                        className="py-3 mx-1 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none "
                                        data-hs-overlay="#hs-danger-alert"
                                      >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                      </button>
                                      <button
                                        type="buton"
                                        className="py-3 mx-1 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none "
                                      >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

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

                                <form action="#">
                                  <div className="p-4 sm:p-10 overflow-y-auto">
                                    <div className="flex gap-x-4 md:gap-x-7">
                                      <div className="grow">
                                        <h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-700">
                                          Edit Barang
                                        </h3>
                                        <div className="mt-10 grid grid-cols-10 gap-3">
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Nama barang{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="30"
                                              />
                                              <div class="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
                                                <label
                                                  for="hs-inline-leading-select-currency"
                                                  class="sr-only"
                                                >
                                                  satuan barang
                                                </label>
                                                <select
                                                  id="hs-inline-leading-select-currency"
                                                  name="hs-inline-leading-select-currency"
                                                  class="py-3 border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-color-4 font-semibold dark:focus:ring-color-2"
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <select
                                                id="hs-select-label"
                                                defaultValue={"DEFAULT"}
                                                className="py-3 px-4 pe-9 block w-full  border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option value="DEFAULT">
                                                  Pilih merk
                                                </option>
                                                <option selected value="">
                                                  ANKER
                                                </option>
                                                <option value="">Xiaomi</option>
                                                <option value="">Robot</option>
                                                <option value="">
                                                  Simpati
                                                </option>
                                                <option value="">
                                                  Indosat
                                                </option>
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
                                                  small={`./src/assets/no-preview.png`}
                                                  medium={`./src/assets/no-preview.png`}
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <select
                                                id="hs-select-label"
                                                className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option value="DEFAULT">
                                                  Pilih Kategori
                                                </option>
                                                <option selected value="">
                                                  Kabel Data
                                                </option>
                                                <option value="">
                                                  Aksesoris
                                                </option>
                                                <option value="">
                                                  Casing HP
                                                </option>
                                                <option value="">
                                                  Charger
                                                </option>
                                                <option value="">
                                                  Kartu Perdana
                                                </option>
                                                <option value="">
                                                  Tempered Glass
                                                </option>
                                                <option value="">Pulsa</option>
                                                <option value="">
                                                  Lainnya
                                                </option>
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
                                                <option value="DEFAULT">
                                                  Pilih Ukuran
                                                </option>
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

                                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t  dark:border-gray-300">
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
                          </div>

                          {/* MODALS FORM Tambah */}
                          <div
                            id="hs-tambah-alert"
                            className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[70] overflow-x-hidden overflow-y-auto"
                          >
                            <div className="hs-overlay-open:mt-10  hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden dark:bg-color-3 ">
                                <div className="absolute top-2 m-3 end-2">
                                  <button
                                    type="button"
                                    className="flex justify-center items-center w-7 h-7 text-md font-semibold rounded-lg border border-transparent text-color-5 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:border-transparent  dark:focus:outline-none "
                                    data-hs-overlay="#hs-tambah-alert"
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

                                <form action="#">
                                  <div className="p-4 sm:p-10 overflow-y-auto">
                                    <div className="flex gap-x-4 md:gap-x-7">
                                      <div className="grow">
                                        <h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-700">
                                          Form Tambah Barang
                                        </h3>
                                        <div className="mt-10 grid grid-cols-10 gap-3">
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Nama barang{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan nama barang"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Harga Beli{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
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
                                                  placeholder="Masukkan harga beli"
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan jumlah stok"
                                              />
                                              <div class="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
                                                <label
                                                  for="hs-inline-leading-select-currency"
                                                  class="sr-only"
                                                >
                                                  satuan barang
                                                </label>
                                                <select
                                                  id="hs-inline-leading-select-currency"
                                                  name="hs-inline-leading-select-currency"
                                                  class="py-3 border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-color-4 font-semibold dark:focus:ring-color-2"
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
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
                                                  placeholder="Masukkan harga jual"
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <select
                                                id="hs-select-label"
                                                defaultValue={"DEFAULT"}
                                                className="py-3 px-4 pe-9 block w-full  border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option
                                                  value="DEFAULT"
                                                  selected
                                                >
                                                  Pilih merk
                                                </option>
                                                <option value="">ANKER</option>
                                                <option value="">Xiaomi</option>
                                                <option value="">Robot</option>
                                                <option value="">
                                                  Simpati
                                                </option>
                                                <option value="">
                                                  Indosat
                                                </option>
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
                                                  small={`./src/assets/no-preview.png`}
                                                  medium={`./src/assets/no-preview.png`}
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
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <select
                                                id="hs-select-label"
                                                defaultValue={"DEFAULT"}
                                                className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option
                                                  value="DEFAULT"
                                                  selected
                                                >
                                                  Pilih Kategori
                                                </option>
                                                <option value="">
                                                  Kabel Data
                                                </option>
                                                <option value="">
                                                  Aksesoris
                                                </option>
                                                <option value="">
                                                  Casing HP
                                                </option>
                                                <option value="">
                                                  Charger
                                                </option>
                                                <option value="">
                                                  Kartu Perdana
                                                </option>
                                                <option value="">
                                                  Tempered Glass
                                                </option>
                                                <option value="">Pulsa</option>
                                                <option value="">
                                                  Lainnya
                                                </option>
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
                                                <option
                                                  value="DEFAULT"
                                                  selected
                                                >
                                                  Pilih Ukuran
                                                </option>
                                                <option value="">-</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t  dark:border-gray-300">
                                    <button
                                      type="button"
                                      className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-color-5  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-200 dark:border-color-5dark:text-color-5 dark:hover:bg-zinc-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-color-5"
                                      data-hs-overlay="#hs-tambah-alert"
                                    >
                                      Kembali
                                    </button>
                                    <button className="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-color-1 text-white hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none ">
                                      Tambah Barang
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" py-1 px-8">
                          <nav className="flex items-center justify-start space-x-1">
                            <button
                              type="button"
                              className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-color-5 hover:text-color-6 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:hover:bg-color-1 "
                            >
                              <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                            </button>
                            <button
                              type="button"
                              className="min-w-[40px] flex justify-center items-center text-color-5 bg-color-1 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none text-color-6 dark:hover:bg-color-1"
                              aria-current="page"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="min-w-[40px] flex justify-center items-center text-color-5 hover:bg-color-1 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none hover:text-color-6 dark:hover:bg-color-1"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="min-w-[40px] flex justify-center items-center text-color-5 hover:bg-color-1 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none hover:text-color-6 dark:hover:bg-color-1"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-color-5 hover:text-color-6 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:hover:bg-color-1 "
                            >
                              <span className="sr-only">Next</span>
                              <span aria-hidden="true">»</span>
                            </button>

                            {/* <div className="">
                            <p className="text-end">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div> */}
                          </nav>
                        </div>
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

export default KelolaBarang;
