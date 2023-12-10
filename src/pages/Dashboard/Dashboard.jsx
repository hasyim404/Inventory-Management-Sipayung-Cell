import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faCircleExclamation,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import ModalImage from "react-modal-image";
import Subnav from "../../components/Subnav";
import MainTitle from "../../components/MainTitle";

const Dashboard = () => {
  const [barang, setBarang] = useState([]);

  const getBarang = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/barang");
    setBarang(response.data.data);
  };

  useEffect(() => {
    getBarang();
  }, []);

  // Total Barang
  const countBarang = barang.length;

  // Perlu Restock
  const restockBarang = barang.filter((item) => item.jml_stok <= 10).length;

  // Pemasukan Bulan ini

  // Stok Terendah
  const stokRendah = barang.filter((item) => item.jml_stok <= 10);
  return (
    <>
      <Navbar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <MainTitle size="text-3xl" main="Dashboard" />
        <Subnav color=" text-color-5" subnav="Dashboard" />

        {/* Content */}
        <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
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
                      {countBarang}{" "}
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
                      {restockBarang}{" "}
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
                      Rp.4.000.000
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
                <MainTitle size="text-xl" main="Produk dengan Stok Terendah" />
                <Subnav
                  subnav="Daftar list produk dengan stok paling rendah akan ditampilkan
                  disini"
                  color="text-color-4"
                />

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
                              {stokRendah.map((item, index) => (
                                <tr key={item.id} className="text-center ">
                                  <td className="py-4 whitespace-nowrap text-sm font-medium text-color-5">
                                    {index + 1}.
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5 text-start">
                                    {item.n_barang}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.jml_stok}
                                  </td>
                                  <td className="flex justify-center items-center px-6 py-4 whitespace-nowrap text-sm ">
                                    <ModalImage
                                      className="w-20 p-1 rounded-s-md border border-color-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-color-2 dark:text-gray-400 dark:focus:ring-color-2"
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
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className=" py-1 px-8">
                          <nav className="flex items-center justify-start space-x-1">
                            <button
                              type="button"
                              className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-color-5 hover:text-color-6 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 dark:hover:bg-color-1 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                <MainTitle size="text-xl" main="Produk Terlaris" />
                <Subnav
                  subnav="Produk yang sering terjual"
                  color="text-color-4"
                />
              </div>
              <div className="flex justify-center items-center">
                <Pie
                  data={{
                    labels: ["Case", "Kabel", "Powerbank", "Buds", "Voucher"],
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
    </>
  );
};

export default Dashboard;
