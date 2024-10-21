import React, { useState, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import Logo from "../images/Logo.svg";
import Lama from "../images/DalaiLama.svg";
import PageEndSvg from "../images/Page_end.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HeroSection = () => {
  const chevronRef = useRef(null);
  const dropdownRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();

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

  useGSAP(() => {
    tl.from(imgRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
    });
    tl.from(
      textRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3"
    );
  });

  return (
    <div className="h-full">
      <section className="h-[115px] w-full lg:px-32 px-8 flex justify-between">
        {/* Logo Section */}
        <div className="flex w-full h-full justify-between items-center">
          <img
            className="logo h-13 cursor-pointer"
            src={Logo}
            alt="The Dalai Lama"
          />

          {/* Navigation Links */}
          <div className="flex h-18 text-xl font-[600] gap-6 py-4 items-center ">
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
                className="absolute top-[68px] downdrop_menu bg-white p-7 rounded-xl font-[500] z-[11]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ol className="flex-col space-y-5 ">
                  <li className="cursor-pointer">All Podcasts</li>
                  <li className="cursor-pointer">
                    Ten Percent Happier Podcast
                  </li>
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
      </section>
      <section className="py-24 grid grid-cols-12 px-32 w-auto relative">
        <div ref={textRef} className="col-span-8 space-y-5">
          <div className="">
            <div className="handwritten text-[120px]">The Dalai Lama's</div>
            <div className="uppercase font-bold tracking-[0.132em] text-[74px]">
              Guide to Happiness
            </div>
          </div>
          <div className="text-[26px] font-medium tracking-widest leading-loose mr-32">
            We went halfway around the world to find out what it actually takes
            to become happier. Journey with us and learn how to train your mind
            to be happier over time alongside the most qualified people on the
            planet - including the Dalai Lama.
          </div>
          <button className="py-4 px-8 bg-black text-white rounded-[50px] font-semibold leanding-loose text-[20px]">
            Join the Course
          </button>
        </div>
        <div className="col-span-4"></div>
        <div className="absolute top-0 right-[-180px] z-10">
          <img
            ref={imgRef}
            src={Lama}
            style={{ height: "1000px", width: "1000px" }}
            alt="Dalai Lama"
          />
        </div>
      </section>
      <div className="w-full bottom-[-32px] absolute z-0">
        <img className="" src={PageEndSvg} alt="endsvg" />
      </div>
    </div>
  );
};

export default HeroSection;
