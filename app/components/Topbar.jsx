import React from "react";
import * as Icons from "react-icons/hi";
import * as Icons1 from "react-icons/fa";


function Topbar() {
  return (
    <>
      <section className="w-full py-3 lg:py-0 h-auto lg:h-[10vh] bg-main-bg sticky top-0 z-40 border-b border-light-color/30">
        <div className=" mx-auto  w-[90%] h-full ">
          <div className="flex  h-auto lg:h-[10vh]  justify-between items-start lg:items-center">
            <ul className="flex justify-center flex-col lg:flex-row items-start gap-4 text-white">
              <a
                className="inline-flex items-center gap-x-1"
                href="mailto:support@ultimatefc.info"
              >
                <Icons.HiMail size={20} className="text-primary-color" />
                <span className="text-[14px] text-light-color">support@ultimatefc.info</span>
              </a>

              <a
                className="inline-flex items-center gap-x-1"
                href="tel:+447466587402"
              >
                <Icons.HiPhone size={20} className="text-primary-color" />
                <span className="text-[14px] text-light-color">+447466587402</span>
              </a>
            </ul>
            <div className="flex items-center justify-center gap-6 text-white  bg-inherit">
              <div className="flex gap-4 hover:*:bg-primary-color *:border *:border-light-color/30 *:size-6 *:rounded-full *:flex *:justify-center *:items-center  *:transition-all *:duration-500 *:linear *:cursor-pointer">
                <span>
                  <Icons1.FaFacebookF size={12} />
                </span>
                <span>
                  <Icons1.FaTwitter size={12} />
                </span>
                <span>
                  <Icons1.FaLinkedinIn size={12} />
                </span>
                <span>
                  <Icons1.FaInstagram size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Topbar;
