import { FaBars } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink as PageLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  // const goToHome = () => {
  //   setIsActive(true);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  //   console.log(isActive);
  // };
  return (
    <nav className="flex justify-between py-3 bg-blue-100 sticky top-0">
      <div className="flex">
        <p className="text-3xl ps-5 font-[poppins] font-bold ">Rain&nbsp;</p>
        <span className="font-[montserrat] text-3xl sm:block hidden">
          | Portfolio
        </span>
      </div>
      <div className="flex">
        <ul className="list-none sm:flex hidden items-center space-x-4 pe-5">
          <li className="text-2xl">
            {/* <PageLink
              to={"/"}
              activeClassName="active"
              isActive={isActive}
              onClick={goToHome}
            >
              Home
            </PageLink> */}
            <ScrollLink
              to="hero-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li className="text-2xl">
            <ScrollLink
              to="skills-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </ScrollLink>
          </li>
          <li className="text-2xl">
            <ScrollLink
              to="project-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </ScrollLink>
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
