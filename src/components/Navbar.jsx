import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import "../styles/navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-between py-3 bg-blue-100 sticky top-0">
      <div className="flex">
        <p className="text-3xl ps-5 font-[poppins] font-bold ">Rain&nbsp;</p>
        <span className="text-3xl sm:block hidden">| Portfolio</span>
      </div>
      <div className="flex">
        <ul className="list-none sm:flex hidden items-center space-x-4 pe-5">
          <li className="text-2xl">
            <a to={"/"}>Home</a>
          </li>
          <li className="text-2xl">
            <a to={"/about"}>About</a>
          </li>
          <li className="text-2xl">
            <a to={"/contact"}>Contact</a>
          </li>
        </ul>
      </div>
      {/* This is the mobile view */}
      <div className="sm:hidden flex ">
        <button
          className="items-center px-6"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show === false ? (
            <FaRegCircleXmark className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
        {show === false && (
          <div className="sm:hidden absolute top-[4rem] right-0 w-full bg-blue-200 p-6 rounded-lg flex justify-center shadow-xl">
            <ul>
              <li className="text-2xl mb-4 cursor-pointer">
                <a to={"/"}>Home</a>
              </li>
              <li className="text-2xl mb-4 cursor-pointer">
                <a to={"/about"}>About</a>
              </li>
              <li className="text-2xl mb-4 cursor-pointer">
                <a to={"/contact"}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
