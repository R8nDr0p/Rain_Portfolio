import { FaBars } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useState } from "react";
import "../styles/navbar.css";
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
  const links = [
    {
      name: "Home",
      section: "hero-section",
    },
    {
      name: "Skills",
      section: "skills-section",
    },
    {
      name: "Projects",
      section: "project-section",
    },
    {
      name: "About",
      section: "about-section",
    },
    {
      name: "Contact",
      section: "contact-section",
    },
  ];
  return (
    <nav className="flex justify-between py-3 bg-blue-100 sticky top-0 z-50">
      <div className="flex">
        <p className="text-3xl ps-5 font-[poppins] font-bold ">Rain&nbsp;</p>
        <span className="font-[montserrat] text-3xl sm:block hidden">
          | Portfolio
        </span>
      </div>
      <div className="flex">
        <ul className="list-none sm:flex hidden items-center space-x-4 pe-5">
          {links.map((link, index) => {
            return (
              <li
                className="cursor-pointer hover:text-teal-300 hover:bg-slate-800 rounded-md px-1 py-1 hover:scale-105 transition-all duration-150"
                key={index}
              >
                <ScrollLink
                  className="text-2xl"
                  to={link.section}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  key={index}
                >
                  {link.name}
                </ScrollLink>
              </li>
            );
          })}
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
              {links.map((link, index) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                  <li className="py-5 cursor-pointer">
                    <ScrollLink
                      className="text-2xl"
                      to={link.section}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      key={index}
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
