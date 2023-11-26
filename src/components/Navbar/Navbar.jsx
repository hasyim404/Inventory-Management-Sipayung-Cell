import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBoxesStacked,
  faBoxesPacking,
  faFileLines,
  faAngleUp,
  faAngleDown,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menus = [
    {
      path: "/",
      name: "Dashboard",
      icon: faDesktop,
    },
    {
      path: "/kelola-barang",
      name: "Kelola Barang",
      icon: faBoxesStacked,
    },
    {
      path: "/laporan-keuangan/",
      name: "Laporan Keuangan",
      icon: faFileLines,
    },
  ];

  const subsNav = [
    {
      path: "/kelola-produk/merk-produk",
      name: "Merk Produk",
    },
    {
      path: "/kelola-produk/kategori",
      name: "Kategori",
    },
    {
      path: "/kelola-produk/ukuran",
      name: "Ukuran",
    },
  ];

  return (
    <div>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full border-b text-sm py-2.5 sm:py-4 lg:ps-64 bg-color-6 ">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            <a
              className="flex text-xl text-color-5 font-bold"
              href="#"
              aria-label="Brand"
            >
              <img src="./src/assets/main-logo.png" width={200} alt="" />
            </a>
          </div>

          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="hidden sm:block"></div>

            <div className="flex flex-row items-center justify-end gap-3">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent disabled:opacity-50 disabled:pointer-events-none text-color-5 bg-color-2 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-color-2 shadow-sm"
              >
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
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>

              <div className=" hs-dropdown relative inline-flex [--placement:bottom-right]">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="pr-5 py-0.5 inline-flex justify-center items-center gap-x-5 text-sm font-semibold rounded-full border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-color-5 bg-color-2 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-color-2 shadow-md"
                >
                  <img
                    className="inline-block h-[2.375rem] w-[2.375rem] rounded-full "
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <p>Administrator</p>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[10rem] bg-color-3 shadow-md rounded-lg p-2 "
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 border bg-color-2 rounded-t-lg ">
                    <p className="text-sm  dark:text-gray-500">Masuk sebagai</p>
                    <p className="text-sm font-medium dark:text-gray-600">
                      admin@sipayungcell.com
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-color-6 hover:bg-red-500 bg-red-600 dark:hover:text-white-300"
                      href="#"
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="flex-shrink-0 w-4 h-4"
                      />
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>

          <ol
            className="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transhtmlForm hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-color-6 dark:border-color-3"
      >
        <div className="px-6">
          <NavLink
            className="flex text-xl font-semibold dark:text-color-5 fosiz dark:focus:outline-none "
            to={"/"}
          >
            <img src="./src/assets/main-logo.png" width={200} alt="" />
          </NavLink>
        </div>

        <nav
          className="hs-accordion-group p-6 mt-5 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-5">
            {menus.map((menu) => (
              <NavLink
                key={menu.name}
                to={menu.path}
                className={({ isActive }) => {
                  return (
                    "flex items-center gap-x-3.5 py-5 px-2.5 text-sm rounded-lg " +
                    (!isActive
                      ? "hover:bg-color-1 dark:hover:text-white hover:font-bold"
                      : "bg-color-1 dark:text-white font-bold")
                  );
                }}
              >
                <li>
                  <FontAwesomeIcon icon={menu.icon} className="pr-2" />{" "}
                  {menu.name}
                </li>
              </NavLink>
            ))}
            <li className="hs-accordion" id="account-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-5 px-2.5 text-sm text-color-5 rounded-lg hover:bg-color-1 hs-accordion-active:bg-color-1  dark:hover:bg-color-1 dark:text-color-5 dark:hover:text-color-6 dark:hs-accordion-active:text-color-6 hs-accordion-active:font-bold"
              >
                <FontAwesomeIcon icon={faBoxesPacking} />
                Kelola Produk
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                />
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                />
              </button>

              <div
                id="account-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 ps-2">
                  {subsNav.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) => {
                        return (
                          "flex items-center gap-x-3.5 py-2 my-1 px-2.5 text-sm rounded-lg  " +
                          (!isActive
                            ? "dark:hover:bg-color-1 dark:hover:text-color-6 "
                            : "dark:bg-color-1 dark:text-color-6 font-bold")
                        );
                      }}
                    >
                      <li>{sub.name}</li>
                    </NavLink>
                  ))}
                  {/* <li>
                    <NavLink
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg dark:bg-color-1 dark:text-color-6"
                      to="/kelola-produk/merk-produk"
                    >
                      Merk Produk
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-x-3.5 py-2 my-1 px-2.5 text-sm text-color-5 rounded-lg hover:bg-color-1 dark:text-color-5 dark:hover:text-color-6 "
                      to="/kelola-produk/kategori"
                    >
                      Kategori
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-color-5 rounded-lg hover:bg-color-1 dark:text-color-5 dark:hover:text-color-6 "
                      to="/kelola-produk/ukuran"
                    >
                      Ukuran
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
