"use client"
import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import { FaBarsStaggered } from "react-icons/fa6"
import { LinkButton } from "./custom/Buttons";

function Navbar() {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <Topbar />
      <section className="w-full h-[12vh] bg-main-bg relative">
        <nav className="w-[90%]  mx-auto">
          <div className="flex justify-between items-center pt-2">
            <a href="/">
              <img className="w-[150px] h-[60px]" src={"/imgs/logo.png"} alt="Logo" />
            </a>

            <button
              className="primary-text text-3xl inline-block lg:hidden"
              onClick={() => setOpenBar((prev) => !prev)}
            >
              <FaBarsStaggered className="text-white" />
            </button>

            <ul
              className={`
                
               lg:flex hidden text-center gap-14 [&_li]:transition-all [&_li]:ease-linear [&_li]:duration-50 text-light-color text-xl hover:[&_li]:text-primary-color`}
            >
              <li>
                <a className="text-[16px]" href="/">Home</a>
              </li>
              <li className=" ">
                <a className="text-[16px]" href="/about">
                  About Us
                </a>
              </li>

              <li className="">
                <a className="text-[16px]" href="/services">
                  Services
                </a>
              </li>
              <li className="">
                <a className="text-[16px]" href="/tracking">
                  Tracking
                </a>
              </li>
              <li className="">
                <a className="text-[16px]" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="hidden lg:block">
             <LinkButton to="/quota" title="Get Quota" />
            </ul>
            <ul
              className={`${!openBar && "-translate-x-full"
                } [&_a]:!text-[16px] px-2 !bg-main-bg/80 flex lg:hidden w-[50%] z-20 text-center transition-all ease-linear duration-500 h-[76vh] absolute py-4 left-0 top-[4.5rem]  flex-col gap-4 [&_li]:transition-all [&_li]:ease-linear [&_li]:duration-50 text-white text-xl hover:[&_li]:text-primary-color`}
            >
              <li className=" transition-all ease-linear duration-700 hover:ring-1 py-2 hover:ring-primary-color rounded-lg ">
                <a href="/">Home</a>
              </li>
              <li className=" transition-all ease-linear duration-700 hover:ring-1 py-2 hover:ring-primary-color rounded-lg ">
                <a className="" href="/about">
                  About Us
                </a>
              </li>
              <li className=" transition-all ease-linear duration-700 hover:ring-1 py-2 hover:ring-primary-color rounded-lg ">
                <a className="" href="/tracking">
                  Tracking
                </a>
              </li>

              <li className=" transition-all ease-linear duration-700 hover:ring-1 py-2 hover:ring-primary-color rounded-lg ">
                <a  href="/contact">
                  Contact
                </a>
              </li>
              <li className=" transition-all ease-linear duration-700  pt-2 px-2  ">
                <LinkButton className="!text-[16px] " to="/about" title="View More" />
              </li>
             
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
