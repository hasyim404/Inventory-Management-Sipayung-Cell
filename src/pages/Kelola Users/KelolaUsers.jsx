import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import MainTitle from "../../components/MainTitle";
import Navbar from "../../components/Navbar/Navbar";
import Subnav from "../../components/Subnav";

import { useUser } from "../../context/UserContext";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

const KelolaUsers = () => {
  const { checkRoleAndNavigate } = useUser();
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = user.slice(firstIndex, lastIndex);
  const npage = Math.ceil(user.length / recordsPerPage);

  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");

  const radioRole = [
    { value: "admin", text: "Admin" },
    { value: "karyawan", text: "Karyawan" },
    { value: "pemilik", text: "Pemilik" },
  ];
  const handleradioRole = (event) => {
    console.log(event.target.value);
    setRole(event.target.value);
  };

  useEffect(() => {
    const allowed = checkRoleAndNavigate("admin", navigate);

    if (!allowed) {
      //
    }

    getUsers();
    cariUser();
  }, [navigate, query]);

  const cariUser = async () => {
    const response = await axios.get(
      `http://localhost:1023/api/v1/users?q=${query}`
    );
    setUser(response.data.qq);
  };

  // Get Data Users
  const getUsers = async () => {
    const response = await axios.get("http://localhost:1023/api/v1/users");
    setUser(response.data.data);
  };

  // Create User
  const addUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1023/api/v1/users", {
        // console.log({
        f_name,
        l_name,
        email,
        password,
        gender,
        role,
        phone_number,
      });

      Swal.fire({
        title: "Berhasil menambah user!",
        text: "User baru berhasil ditambahkan!",
        icon: "success",
      });
      getUsers();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Gagal menambah user!",
        text: "User baru gagal ditambahkan",
        icon: "error",
      });
    }
  };

  // Delete User
  const deleteUser = async (id, e) => {
    try {
      await axios.delete(`http://localhost:1023/api/v1/users/${id}`);
      await Swal.fire({
        title: "Hapus data user berhasil!",
        text: "Hapus data user Berhasil dilakukan!",
        icon: "success",
      });
      window.location.reload();
    } catch (error) {
      Swal.fire({
        title: "Hapus data gagal!",
        text: "Gagal menghapus data user",
        icon: "error",
      });
    }
  };

  const theads = [
    {
      judul: "No",
    },
    {
      judul: "Nama User",
    },
    {
      judul: "Email",
    },
    {
      judul: "Gender",
    },
    {
      judul: "Role",
    },
    {
      judul: "No. Hp",
    },
    {
      judul: "Action",
    },
  ];

  return (
    <>
      <Navbar active4="active" />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <MainTitle size="text-3xl" main="Kelola Users" />
        <p className="mb-2 text-md font-normal text-color-4">
          <Link color="text-color-4" to="/dashboard">
            Dashboard{" "}
          </Link>
          /{" "}
          <span color="text-color-5" className="italic">
            Kelola Users
          </span>
        </p>

        <div className="px-4 py-10 sm:px-6 lg:px-0 lg:py-5 ">
          <div className="mt-6 ">
            <div className="flex flex-col bg-white shadow-md rounded-xl hover:shadow-md transition dark:bg-color-6 col-span-2 ">
              <div className="p-4 md:p-5">
                <div className="grid grid-flow-col gap-4 place-content-between">
                  <div className="col-span-3">
                    <MainTitle size="text-xl" main="Data Users" />
                    <Subnav
                      subnav="Berisi daftar dari seluruh data Users"
                      color="text-color-4"
                    />
                  </div>
                  <div className="col-span-7 flex justify-end">
                    <div className="py-2 px-3">
                      <SearchBar setQuery={setQuery} setName={"User"} />
                    </div>

                    <div className="py-1 2">
                      <button
                        type="button"
                        className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-color-1 text-color-6 shadow-sm hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                        data-hs-overlay="#hs-tambah-alert"
                      >
                        + Tambah User
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
                                    {index + 1}.
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-color-5">
                                    {item.f_name} {item.l_name}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.email}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.gender === "L"
                                      ? "Laki-laki"
                                      : "Perempuan"}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    {item.role}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-color-5">
                                    +
                                    <a
                                      href={`https://wa.me/${item.phone_number}`}
                                      target="_blank"
                                    >
                                      {item.phone_number}
                                    </a>
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
                                        onClick={() => deleteUser(item.id)}
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

                                <form onSubmit={addUsers}>
                                  <div className="p-4 sm:p-10 overflow-y-auto">
                                    <div className="flex gap-x-4 md:gap-x-7">
                                      <div className="grow">
                                        <h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-700">
                                          Form Tambah User
                                        </h3>
                                        <div className="mt-10 grid grid-cols-10 gap-3">
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Nama Depan{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan nama depan"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Nama Belakang{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan nama belakang"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-5 grid grid-cols-10 gap-3">
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Email{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan email"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Gender{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <div className=" gap-2">
                                                <div className="">
                                                  <label className="inline-flex items-center mr-5 py-3 px-5 rounded-lg text-sm  bg-color-6">
                                                    <input
                                                      type="radio"
                                                      className="form-radio"
                                                      value="male"
                                                      checked={
                                                        gender === "male"
                                                      }
                                                      onChange={() =>
                                                        setGender("male")
                                                      }
                                                    />
                                                    <span className="ml-2">
                                                      Laki-laki
                                                    </span>
                                                  </label>
                                                  <label className="inline-flex items-center py-3 px-5 rounded-lg text-sm  bg-color-6">
                                                    <input
                                                      type="radio"
                                                      className="form-radio"
                                                      value="female"
                                                      checked={
                                                        gender === "female"
                                                      }
                                                      onChange={() =>
                                                        setGender("female")
                                                      }
                                                    />
                                                    <span className="ml-2">
                                                      Perempuan
                                                    </span>
                                                  </label>
                                                </div>
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
                                              No. Hp{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan No. Hp"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Role{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <select
                                                id="hs-select-label"
                                                className="py-3 px-4 pe-9 block w-full rounded-lg border-color-3 shadow-sm text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                              >
                                                <option
                                                  value=""
                                                  disabled
                                                  selected
                                                >
                                                  Pilih Role
                                                </option>

                                                {radioRole.map((radio) => (
                                                  <option
                                                    key={radio.value}
                                                    value={radio.value}
                                                  >
                                                    {radio.text}
                                                  </option>
                                                ))}
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
                                              Password{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan password"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-5 grid grid-cols-10 gap-3">
                                          <div className="col-span-5">
                                            <label
                                              htmlFor="hs-leading-icon"
                                              className="block text-md font-medium mb-2 dark:text-color-5"
                                            >
                                              Konfirmasi Password{" "}
                                              <span className="italic text-color-warning">
                                                *
                                              </span>
                                            </label>
                                            <div className="relative">
                                              <input
                                                type="text"
                                                name="hs-leading-icon"
                                                className="py-3 px-4 block w-full border-color-3 shadow-sm rounded-lg text-sm focus:z-10 focus:border-color-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-color-6 dark:text-gray-400 dark:focus:ring-color-2"
                                                placeholder="Masukkan Konfirmasi Password"
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
                                    <button
                                      type="submit"
                                      className="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-color-1 text-white hover:bg-6hover disabled:opacity-50 disabled:pointer-events-none "
                                    >
                                      Tambah User
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
                          data={user.length}
                          show={records.length}
                          setName={"Users"}
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

export default KelolaUsers;
