import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faCircleExclamation,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <h1 className="block text-2xl font-bold sm:text-3xl text-color-5">
        Dashboard
      </h1>
      <p className="mb-2 text-sm font-normal text-color-4"> Dashboard</p>

      {/* Content */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
        {/* 3 Card info */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6">
          <div
            className="group flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="text-5xl text-color-6 bg-sky-400  p-4 rounded-full">
                  <FontAwesomeIcon icon={faCubes} />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-color-5">
                    Total barang
                  </h3>
                  <p className="text-5xl font-semibold text-color-5">
                    512{" "}
                    <span className="text-sm font-normal text-gray-500">
                      Barang
                    </span>
                  </p>
                </div>
                <div className="ps-3"></div>
              </div>
            </div>
          </div>

          <div
            className="group flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="text-5xl text-color-6 bg-yellow-400 p-4 rounded-full">
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-color-5">
                    Perlu Restock
                  </h3>
                  <p className="text-5xl font-semibold text-color-5">
                    10{" "}
                    <span className="text-sm font-normal text-gray-500">
                      Barang
                    </span>
                  </p>
                </div>
                <div className="ps-3"></div>
              </div>
            </div>
          </div>

          <div
            className="group flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="text-5xl text-color-6 bg-green-400 p-4 rounded-full">
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-color-5">
                    Pemasukan Bulanan
                  </h3>
                  <p className="text-3xl font-semibold text-color-5">
                    Rp.5.000.000
                  </p>
                </div>
                <div className="ps-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6">
          <div className="group flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
            <div className="p-4 md:p-5">
              <p className="text-xl font-bold sm:text-xl text-color-5">
                Produk dengan Stok Terendah
              </p>
              <p className="mb-2 text-md font-normal text-color-4">
                {" "}
                Daftar list produk dengan stok paling rendah akan ditampilkan
                disini
              </p>

              <div className="flex flex-col mt-5">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg">
                      <div className="overflow-hidden">
                        <table className="min-w-full divide-y ">
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
                                Nama Barang
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-center text-sm font-boldtext-color-5 uppercase"
                              >
                                Stok
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-center text-sm font-boldtext-color-5 uppercase"
                              >
                                Gambar
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                1.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Gantungan Hp
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                2
                              </td>
                              <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                <img src="./src/assets/react.svg" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                2.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Charger HP Anker Type C
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                4
                              </td>
                              <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                <img src="./src/assets/react.svg" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                3.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Charger HP Anker Lightning
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                5
                              </td>
                              <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                <img src="./src/assets/react.svg" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                4.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Charger HP Anker Micro
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                5
                              </td>
                              <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                <img src="./src/assets/react.svg" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                5.
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                Charger HP Anker Type A
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                8
                              </td>
                              <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                <img src="./src/assets/react.svg" alt="" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className=" py-1 px-8">
                        <nav className="flex items-center justify-end space-x-1">
                          <button
                            type="button"
                            className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-color-5 hover:text-color-6 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:hover:bg-color-1 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </button>
                          <button
                            type="button"
                            className="min-w-[40px] flex justify-center items-center text-color-5 hover:bg-color-1 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none hover:text-color-6 dark:hover:bg-color-1"
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
                            className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-color-5 hover:text-color-6 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:hover:bg-color-1 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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

          {/* Diagram Pie */}
          <div
            className="group flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="p-4 md:p-5">
              <p className="text-xl font-bold sm:text-xl text-color-5">
                Produk Terlaris
              </p>
              <p className="mb-2 text-md font-normal text-color-4">
                {" "}
                Produk yang sering terjual
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Pie
                data={{
                  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
                  datasets: [
                    {
                      label: "Terjual",
                      data: [56, 54, 29, 35, 80],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.9)",
                        "rgba(54, 162, 235, 0.9)",
                        "rgba(255, 206, 86, 0.9)",
                        "rgba(75, 192, 192, 0.9)",
                        "rgba(153, 102, 255, 0.9)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>

        {/* Diagram */}
      </div>
    </div>
  );
};

export default Dashboard;