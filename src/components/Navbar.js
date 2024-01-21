import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[95%]">
      <a href="/home">
        <img
          src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png"
          className="md:w-[150px] sm:w-[110px] w-[90px]"
          alt=""
        />
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
