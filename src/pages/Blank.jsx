import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/Navbar/Navbar";

const Blank = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Navbar />
      <div className="text-center mt-16 mr-auto">
        <h1 className="font-bold fa-10x">404</h1>
        <p className="font-semibold fa-3x">Not Found</p>
        <button
          onClick={handleGoBack}
          className="items-center gap-x-3.5 py-2 mt-3 px-10 rounded-lg text-lg font-semibold text-color-6 hover:bg-6hover bg-color-1 dark:hover:text-white-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Kembali
        </button>
      </div>
    </>
  );
};

export default Blank;
