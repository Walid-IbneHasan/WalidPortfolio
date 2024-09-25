import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Walid &nbsp;
            <span className="sm:block hidden"> | NextJS Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1s-nk-vQqxLbUEVill66gFFGBKOE-0kEn/view?usp=sharing"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/walid-ibne-hasan-1288b4290/"
              target="_blank"
            >
              <IoLogoLinkedin
                size={25}
                className="hover:text-blue-400 cursor-pointer"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Walid-IbneHasan" target="_blank">
              <IoLogoGithub
                size={25}
                className="cursor-pointer hover:opacity-50"
              />
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/13NKh9y0BmfCYhiPRMSxBuBEiYNPELci9/view?usp=drive_link"
                  className="text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/walid-ibne-hasan-1288b4290/"
                  target="_blank"
                  className="font-poppins font-medium cursor-pointer text-[16px] text-secondary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Walid-IbneHasan"
                  target="_blank"
                  className="font-poppins font-medium cursor-pointer text-[16px] text-secondary "
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
