import React from "react";
import { IoChevronDown } from "react-icons/io5";
import Logo from "../../public/images/Logo.svg";

const Navbar = () => {
  return (
    <section className="h-[105px] w-full px-28 flex justify-between">
      <div className="flex w-full h-full justify-between items-center">
        <img
          className="logo h-12 border-[1px] border-solid boreder-black"
          src={Logo}
          alt=""
        />

        <div className="flex h-18 text-lg font-[600] gap-6 py-4">
          <div className="flex items-center gap-2">
            Podcast <IoChevronDown />
          </div>
          <div className="flex items-center">Newsletter</div>
          <div className="flex items-center">Membership</div>
          <div className="h-18 bg-black text-white text-[18px] px-[35px] py-4 rounded-[30px]">
            Try Free
          </div>
        </div>
      </div>

      {/* <div className="h-10 flex items-center">
        <img className="logo h-full" src={Logo} alt="" />
      </div>
      <div className="h-12 nav_parts flex  justify-between gap-9 px-2">
        <div className="hidden lg:flex justify-between  text-lg items-center font-medium gap-9">
          <div className="nav_menus flex items-center gap-2">
            Podcast
            
          </div>
          <div className="nav_menus">Newsletter</div>
          <div className="nav_menus">Membership</div>
        </div>
        <button className="h-12  nav_btn flex justify-end items-center px-8 py-3 bg-black text-white font-medium text-[16px] rounded-3xl">
          Try Free
        </button>
      </div> */}
    </section>
  );
};

export default Navbar;
