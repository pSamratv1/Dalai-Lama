import React, { useState, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import Logo from "../images/Logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const chevronRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // GSAP animation for dropdown visibility on hover
  useGSAP(() => {
    gsap.fromTo(
      dropdownRef.current,
      { opacity: 0, y: 50 }, // Start state: hidden & below
      {
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 50, // Slide up or down
        duration: 0.4,
        ease: "power2.out",
        display: isHovered ? "block" : "none",
      }
    );
  }, [isHovered]);

  // GSAP animation for chevron rotation on hover
  useGSAP(() => {
    gsap.to(".icon", {
      rotateX: isHovered ? 180 : 0,
      duration: 0.3,
    });
  }, [isHovered]);

  return (
    <section className="h-[105px] w-full lg:px-28 px-8 flex justify-between">
      {/* Logo Section */}
      <div className="flex w-full h-full justify-between items-center">
        <img
          className="logo h-12 cursor-pointer"
          src={Logo}
          alt="The Dalai Lama"
        />

        {/* Navigation Links */}
        <div className="flex h-18 text-lg font-[600] gap-6 py-4 items-center ">
          {/* Podcast Dropdown */}
          <div
            className="relative lg:flex hidden items-center gap-2 cursor-pointer h-8 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Podcast
            <IoChevronDown ref={chevronRef} className="icon" />
          </div>
          {isHovered && (
            <div
              ref={dropdownRef}
              className="absolute top-[68px] downdrop_menu bg-white p-7 rounded-xl font-[500] z-[10]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ol className="flex-col space-y-5 ">
                <li className="cursor-pointer">All Podcasts</li>
                <li className="cursor-pointer">Ten Percent Happier Podcast</li>
                <li className="cursor-pointer">More Than A Feeling</li>
                <li className="cursor-pointer">Childproof</li>
                <li className="cursor-pointer">Twenty Percent Happier</li>
              </ol>
            </div>
          )}
          {/* Other Links */}
          <div className="lg:flex hidden items-center cursor-pointer">
            Newsletter
          </div>
          <div className="lg:flex hidden items-center cursor-pointer">
            Membership
          </div>
          {/* Try Free Button */}
          <div className="h-18 bg-black text-white text-[18px] px-[35px] py-4 rounded-[30px] cursor-pointer">
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
