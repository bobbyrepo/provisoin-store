import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[95%] mx-auto">
      <a href="/home">
        <img src={logo} className="md:w-[90px] sm:w-[80px] w-[70px]" alt="" />
      </a>
      <div className="flex items-center sm:gap-12 gap-4">
        <a href="/about">
          <button className="md:text-lg sm:text-md text-[14px] hover:text-orange-400">
            ABOUT
          </button>
        </a>
        <a href="/">
          <button
            onClick={() => {
              localStorage.setItem("token", "");
            }}
            className="text-white md:text-md sm:text-sm text-[13px] sm:px-3 px-2 rounded-lg sm:py-2 py-1 bg-orange-400"
          >
            LOG OUT
          </button>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
