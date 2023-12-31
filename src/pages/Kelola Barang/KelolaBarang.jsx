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

import { useUser } from "../../context/UserContext";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

const KelolaBarang = () => {
  const { checkRoleAndNavigate, getUserData } = useUser();
  const navigate = useNavigate();
  const data = getUserData();

  const [barang, setBarang] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = barang.slice(firstIndex, lastIndex);
  const npage = Math.ceil(barang.length / recordsPerPage);

  const [n_barang, setNBarang] = useState("");
  const [jml_stok, setJmlStok] = useState("");
  const [h_beli, setHBeli] = useState("");
  const [h_jual, setHJual] = useState("");
  const [merk_id, setMerkId] = useState("");
  const [merkIdOptions, setMerkIdOptions] = useState([]);
  const [img, setImg] = useState("");
  const [kategori_id, setKategoriId] = useState("");
  const [kategoriIdOptions, setKategoriIdOptions] = useState([]);
  const [ukuran_id, setUkuranId] = useState("");
  const [ukuranIdOptions, setUkuranIdOptions] = useState([]);
  const [users_id, setUsersId] = useState([data.id]);
  const [query, setQuery] = useState("");

  // Handle Select
  // Tipe Stok
  const optionsStok = [
    { value: "pcs", text: "-/pcs" },
    { value: "paket", text: "-/paket" },
    { value: "set", text: "-/set" },
    { value: "lusin", text: "-/lusin" },
    { value: "-", text: "-/-" },
  ];
  const [tipe_stok, setTipeStok] = useState(optionsStok[0].value);
  const handleTipeStok = (e) => {
    setTipeStok(e.target.value);
  };

  useEffect(() => {
    const allowed = checkRoleAndNavigate(["pemilik", "karyawan"], navigate);

    if (!allowed) {
      //
    }

    getBarang();
    getMerk();
    getKategori();
    getUkuran();
    cariBarang();
  }, [navigate, query]);

  const cariBarang = async () => {
    const response = await axios.get(
      `http://localhost:1023/api/v1/barang?q=${query}`
    );
    setBarang(response.data.qq);
  };

  // Get Data
  // Get data barang
  const getBarang = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/barang");
    setBarang(response.data.data);
  };
  // Get data merk
  const getMerk = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/merk");
    setMerkIdOptions(response.data.data);
  };
  // Get data kategori
  const getKategori = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/kategori");
    setKategoriIdOptions(response.data.data);
  };
  // Get data ukuran
  const getUkuran = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/ukuran");
    setUkuranIdOptions(response.data.data);
  };

  // Add data barang
  const addBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1023/api/v1/barang", {
        // console.log({
        n_barang,
        jml_stok,
        tipe_stok,
        h_beli,
        h_jual,
        merk_id,
        img,
        kategori_id,
        ukuran_id,
        users_id,
      });

      Swal.fire({
        title: "Tambah Data Berhasil!",
        text: "Berhasil menambahkan data baru!",
        icon: "success",
      });
      getBarang();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Gagal tambah data!",
        text: "Gagal menambahkan data barang",
        icon: "error",
      });
    }
  };

  // Delete data barang
  const deleteBarang = async (id, e) => {
    try {
      const response = await axios.get(
        `http://localhost:1023/api/v1/barang/${id}`
      );

      const namaBarang = response.data.data[0].n_barang;

      const result = await Swal.fire({
        title: "Apakah Anda yakin?",
        html: `Anda akan menghapus<br/>${namaBarang}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus",
      });
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:1023/api/v1/barang/${id}`);

        // Tampilkan pesan keberhasilan
        await Swal.fire({
          title: "Hapus data barang berhasil!",
          icon: "success",
        });

        window.location.reload();
      }
    } catch (error) {
      Swal.fire({
        title: "Hapus data gagal!",
        text: "Gagal menghapus data barang",
        icon: "error",
      });
    }
  };

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
      judul: "Merk",
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
      <Navbar active1="active" />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <MainTitle size="text-3xl" main="Kelola Barang" />
        <p className="mb-2 text-md font-normal text-color-4">
          <Link color="text-color-4" to="/dashboard">
            Dashboard{" "}
          </Link>
          /{" "}
          <span color="text-color-5" className="italic">
            Kelola Barang
          </span>
        </p>

        {/* Content */}
        <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
          <div className="mt-6 ">
            <div className="flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
              <div className="p-4 md:p-5">
                <div className="grid grid-flow-col gap-4 place-content-between">
                  <div className="col-span-3">
                    <MainTitle size="text-xl" main="Data Barang" />
                    <Subnav
                      subnav="Berisi daftar dari semua barang"
                      color="text-color-4"
                    />
                  </div>
                  <div className="col-span-7 flex justify-end">
                    <div className="py-2 px-3">
                      <SearchBar setQuery={setQuery} setName={"Barang"} />
                    </div>
                    <div className="py-1 px-2">
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
                              {records.map((item, index) => (
                                <tr key={index} className="text-center ">
                                  <td className="py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                    {index +
                                      1 +
                                      (currentPage - 1) * recordsPerPage}
                                    .
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                    {item.n_barang}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.jml_stok} -/{item.tipe_stok}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.n_merk}
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
                                      small={`./src/assets/${
                                        item.img !== ""
                                          ? item.img
                                          : "no-preview.png"
                                      }`}
                                      medium={`./src/assets/${
                                        item.img !== ""
                                          ? item.img
                                          : "no-preview.png"
                                      }`}
                                      hideDownload
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    <div className="text-center">
                                      <Link
                                        to={`/kelola-barang/edit/${item.id_barang}`}
                                      >
                                        <button
                                          type="button"
                                          className="py-3 mx-1 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none "
                                          data-hs-overlay="#hs-danger-alert"
                                        >
                                          <FontAwesomeIcon
                                            icon={faPenToSquare}
                                          />
                                        </button>
                                      </Link>
                                      <button
                                        type="buton"
                                        onClick={() =>
                                          deleteBarang(item.id_barang)
                                        }
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

                                <form onSubmit={addBarang}>
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
                                                value={n_barang}
                                                onChange={(e) =>
                                                  setNBarang(e.target.value)
                                                }
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
                                                  value={h_beli}
                                                  onChange={(e) =>
                                                    setHBeli(e.target.value)
                                                  }
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
                                                value={jml_stok}
                                                onChange={(e) =>
                                                  setJmlStok(e.target.value)
                                                }
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan jumlah stok"
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
                                                  value={tipe_stok}
                                                  onChange={handleTipeStok}
                                                  className="py-3 border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-color-4 font-semibold dark:focus:ring-color-2"
                                                >
                                                  <option value="">
                                                    --Tipe--
                                                  </option>

                                                  {optionsStok.map((option) => (
                                                    <option
                                                      key={option.value}
                                                      value={option.value}
                                                    >
                                                      {option.text}
                                                    </option>
                                                  ))}
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
                                                  value={h_jual}
                                                  onChange={(e) =>
                                                    setHJual(e.target.value)
                                                  }
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
                                                value={merk_id}
                                                onChange={(e) =>
                                                  setMerkId(e.target.value)
                                                }
                                                className="py-3 px-4 pe-9 block w-full  border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option value="">
                                                  Pilih merk
                                                </option>

                                                {merkIdOptions.map((data) => (
                                                  <option
                                                    key={data.id}
                                                    value={data.id}
                                                  >
                                                    {data.n_merk}
                                                  </option>
                                                ))}
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
                                                  value={img}
                                                  onChange={(e) =>
                                                    setImg(e.target.value)
                                                  }
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
                                                value={kategori_id}
                                                onChange={(e) =>
                                                  setKategoriId(e.target.value)
                                                }
                                                className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option value="">
                                                  Pilih Kategori
                                                </option>
                                                {kategoriIdOptions.map(
                                                  (data) => (
                                                    <option
                                                      key={data.id}
                                                      value={data.id}
                                                    >
                                                      {data.n_kategori}
                                                    </option>
                                                  )
                                                  // console.log(data.n_merk)
                                                )}
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
                                                value={ukuran_id}
                                                onChange={(e) =>
                                                  setUkuranId(e.target.value)
                                                }
                                                className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option value="">
                                                  Pilih Ukuran
                                                </option>
                                                {ukuranIdOptions.map((data) => (
                                                  <option
                                                    key={data.id}
                                                    value={data.id}
                                                  >
                                                    {data.n_ukuran}
                                                  </option>
                                                ))}
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
                                    <button
                                      type="submit"
                                      className="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-color-1 text-white hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                                    >
                                      Tambah Barang
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Pagination
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          npage={npage}
                          data={barang.length}
                          show={records.length}
                          setName={"Barang"}
                        />
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
