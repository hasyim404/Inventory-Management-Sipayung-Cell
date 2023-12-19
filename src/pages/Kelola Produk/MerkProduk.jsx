import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import ModalImage from "react-modal-image";

import Navbar from "../../components/Navbar/Navbar";
import MainTitle from "../../components/MainTitle";
import Subnav from "../../components/Subnav";

import { useUser } from "../../context/UserContext";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

const MerkProduk = () => {
  const { checkRoleAndNavigate } = useUser();
  const navigate = useNavigate();

  const [merk, setMerk] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = merk.slice(firstIndex, lastIndex);
  const npage = Math.ceil(merk.length / recordsPerPage);

  const [n_merk, setNMerk] = useState("");
  const [logo, setLogo] = useState("");
  const [catatan, setCatatan] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const allowed = checkRoleAndNavigate(["pemilik", "karyawan"], navigate);

    if (!allowed) {
      //
    }

    getMerk();
    cariMerk();
  }, [navigate, query]);

  const cariMerk = async () => {
    const response = await axios.get(
      `http://localhost:1023/api/v1/merk?q=${query}`
    );
    setMerk(response.data.qq);
  };

  // Get data
  const getMerk = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/merk");
    setMerk(response.data.data);
  };

  // Add data
  const addMerk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1023/api/v1/merk", {
        n_merk,
        logo,
        catatan,
      });

      Swal.fire({
        title: "Tambah Data Merk Berhasil!",
        text: "Berhasil menambahkan data baru!",
        icon: "success",
      });
      getMerk();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Gagal tambah data!",
        text: "Gagal menambahkan data merk",
        icon: "error",
      });
    }
  };

  // Delete data
  const deleteMerk = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:1023/api/v1/merk/${id}`
      );

      const namaMerk = response.data.data[0].n_merk;

      const result = await Swal.fire({
        title: "Apakah Anda yakin?",
        html: `Anda akan menghapus<br/>${namaMerk}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus",
      });
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:1023/api/v1/merk/${id}`);

        // Tampilkan pesan keberhasilan
        await Swal.fire({
          title: "Hapus data merk berhasil!",
          icon: "success",
        });

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Hapus data gagal!",
        text: "Gagal menghapus data merk",
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
          <span className="text-color-5 italic"> Merk Produk</span>
        </p>

        {/* Content */}
        <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
          <div className="mt-6 ">
            <div className="flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
              <div className="p-4 md:p-5">
                <div className="grid grid-flow-col gap-4 place-content-between">
                  <div className="col-span-3">
                    <MainTitle size="text-xl" main="Daftar Merk" />
                    <Subnav
                      subnav="Berisi daftar seluruh merk produk"
                      color="text-color-4"
                    />
                  </div>
                  <div className="col-span-7 flex justify-end">
                    <div className="py-2 px-3">
                      <SearchBar setQuery={setQuery} setName={"Merk"} />
                    </div>

                    <div className="py-1 2">
                      <button
                        type="button"
                        className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-color-1 text-color-6 shadow-sm hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                        data-hs-overlay="#hs-tambah-alert"
                      >
                        + Tambah Merk
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
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-sm font-bold text-color-5 uppercase"
                                >
                                  No
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-start text-sm font-bold text-color-5 uppercase"
                                >
                                  Nama
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-sm font-boldtext-color-5 uppercase"
                                >
                                  Logo
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-sm font-boldtext-color-5 uppercase"
                                >
                                  Catatan
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-sm font-boldtext-color-5 uppercase"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {records.map((item, index) => (
                                <tr key={item.id}>
                                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                    {index +
                                      1 +
                                      (currentPage - 1) * recordsPerPage}
                                    .
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                    {item.n_merk}
                                  </td>
                                  <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                    <ModalImage
                                      className="w-20 border border-color-2 shadow-sm rounded-sm"
                                      small={`./src/assets/${
                                        item.logo !== ""
                                          ? item.logo
                                          : "no-preview.png"
                                      }`}
                                      medium={`./src/assets/${
                                        item.logo !== ""
                                          ? item.logo
                                          : "no-preview.png"
                                      }`}
                                      hideDownload
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                    {item.catatan}
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
                                        onClick={() => deleteMerk(item.id)}
                                        className="py-3 mx-1 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none "
                                      >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                              {/* Modals Img */}
                              <tr>
                                <td>
                                  <div
                                    id="hs-sign-out-alert-small-window"
                                    className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[70] overflow-x-hidden overflow-y-auto"
                                  >
                                    <div className="hs-overlay-open:mt-40 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xs sm:w-full m-3 sm:mx-auto">
                                      <div className="relative flex flex-col dark:bg-color-3 shadow-md rounded-xl">
                                        <div className="absolute top-2 end-2">
                                          <button
                                            type="button"
                                            className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-color-5 hover:bg-color-1 disabled:opacity-50 disabled:pointer-events-none dark:color-5 dark:border-transparent hover:text-color-6 dark:hover:bg-color-1 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            data-hs-overlay="#hs-sign-out-alert-small-window"
                                          >
                                            <span className="sr-only">
                                              Close
                                            </span>
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

                                        <div className="p-4 sm:p-10 text-center overflow-y-auto">
                                          <div className="mt-6 grid gap-y-2">
                                            <img
                                              src="../src/assets/no-preview.png"
                                              alt=""
                                              className="rounded-lg"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          {/* MODALS FORM Tambah */}
                          <div
                            id="hs-tambah-alert"
                            className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[70] overflow-x-hidden overflow-y-auto"
                          >
                            <div className="hs-overlay-open:mt-10  hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-xl pt-20 md:w-full m-3 md:mx-auto">
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

                                <form onSubmit={addMerk}>
                                  <div className="p-4 sm:p-10 overflow-y-auto">
                                    <div className="flex gap-x-4 md:gap-x-7">
                                      <div className="grow">
                                        <h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-700">
                                          Form Tambah Merk
                                        </h3>
                                        <div className="mt-10 grid grid-cols-10 gap-3">
                                          <div className="col-span-3 flex">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="mt-2 block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Nama Merk{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <p className="mt-2 ml-5">:</p>
                                          </div>
                                          <div className="col-span-7">
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                value={n_merk}
                                                onChange={(e) =>
                                                  setNMerk(e.target.value)
                                                }
                                                className="py-3 px-4 block w-full border-color-1 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-1 focus:ring-color-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:border-color-1 dark:text-gray-400 dark:focus:ring-color-1"
                                                placeholder="Masukkan nama merk"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-5 grid grid-cols-10 gap-3">
                                          <div className="col-span-3 flex">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="mt-2 block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Catatan{" "}
                                            </label>
                                            <p className="mt-2 ml-14">:</p>
                                          </div>
                                          <div className="col-span-7">
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                value={catatan}
                                                onChange={(e) =>
                                                  setCatatan(e.target.value)
                                                }
                                                className="py-3 px-4 block w-full border-color-1 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-1 focus:ring-color-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:border-color-1 dark:text-gray-400 dark:focus:ring-color-1"
                                                placeholder="Masukkan catatan"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-5 grid grid-cols-10 gap-3">
                                          <div className="col-span-3 flex">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="mt-2 mr-3 block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Upload Logo
                                            </label>
                                            <p className="mt-2 m-3">:</p>
                                          </div>
                                          <div className="col-span-7">
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
                                      Tambah Merk
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
                          data={merk.length}
                          show={records.length}
                          setName={"Merk"}
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

export default MerkProduk;
