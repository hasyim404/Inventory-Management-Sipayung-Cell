import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Kategori = () => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <h1 className="block text-2xl font-bold sm:text-3xl text-color-5">
        Kelola Produk
      </h1>
      <p className="mb-2 text-sm font-normal text-color-4">
        {" "}
        <Link to="/">Dashboard </Link>/{" "}
        <span className="italic">Kelola Produk / </span>
        <span className="italic"> Kategori</span>
      </p>

      {/* Content */}
      <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
        <div className="mt-6 ">
          <div className="flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
            <div className="p-4 md:p-5">
              <div className="grid grid-flow-col gap-4 place-content-between">
                <div className="col-span-3">
                  <p className="text-xl font-bold sm:text-xl text-color-5">
                    Daftar Kategori
                  </p>
                  <p className="mb-2 text-md font-normal text-color-4">
                    Berisi daftar seluruh kategori
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

                  <div className="py-1 2">
                    <button
                      type="button"
                      className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-color-1 text-color-6 shadow-sm hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                      data-hs-overlay="#hs-tambah-alert"
                    >
                      + Tambah Kategori
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
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                1.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Kabel Data
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                2.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Aksesoris
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                3.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Casing HP
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                4.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Charger
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                5.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Kartu Perdana
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                6.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Tempered Glass
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                7.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Pulsa
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
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                7.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Lainnya
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
                          </tbody>
                        </table>

                        {/* MODALS FORM EDIT */}
                        <div
                          id="hs-danger-alert"
                          className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[70] overflow-x-hidden overflow-y-auto"
                        >
                          <div className="hs-overlay-open:mt-10  hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-xl pt-20 md:w-full m-3 md:mx-auto">
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
                                        Edit Kategori
                                      </h3>
                                      <div className="mt-10 grid grid-cols-10 gap-3">
                                        <div className="col-span-3 flex">
                                          <label
                                            htmlFor="hs-leading-icon"
                                            className="mt-2 block text-md font-medium mb-2 dark:text-color-5"
                                          >
                                            Nama Kategori{" "}
                                            <span className="italic text-color-warning">
                                              *
                                            </span>
                                          </label>
                                          <p className="mt-2 ml-4">:</p>
                                        </div>
                                        <div className="col-span-7">
                                          <div className="relative">
                                            <input
                                              type="text"
                                              name="hs-leading-icon"
                                              className="py-3 px-4 block w-full border-color-1 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-1 focus:ring-color-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:border-color-1 dark:text-gray-400 dark:focus:ring-color-1"
                                              placeholder="Kabel Data"
                                            />
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
                                    Edit Kategori
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

                              <form action="#">
                                <div className="p-4 sm:p-10 overflow-y-auto">
                                  <div className="flex gap-x-4 md:gap-x-7">
                                    <div className="grow">
                                      <h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-700">
                                        Form Tambah Kategori
                                      </h3>
                                      <div className="mt-10 grid grid-cols-10 gap-3">
                                        <div className="col-span-3 flex">
                                          <label
                                            htmlFor="hs-leading-icon"
                                            className="mt-2 block text-md font-medium mb-2 dark:text-color-5"
                                          >
                                            Nama Kategori{" "}
                                            <span className="italic text-color-warning">
                                              *
                                            </span>
                                          </label>

                                          <p className="mt-2 ml-4">:</p>
                                        </div>
                                        <div className="col-span-7">
                                          <div className="relative">
                                            <input
                                              type="text"
                                              name="hs-leading-icon"
                                              className="py-3 px-4 block w-full border-color-1 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-1 focus:ring-color-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:border-color-1 dark:text-gray-400 dark:focus:ring-color-1"
                                              placeholder="Masukkan kategori"
                                            />
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
                                    Tambah Kategori
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
  );
};

export default Kategori;
