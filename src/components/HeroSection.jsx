import React, { useState, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import Logo from "../images/Logo.svg";
import Lama from "../images/DalaiLama.svg";
import PageEndSvg from "../images/Page_end.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HeroSection = () => {
  // Gsap Plugin
  gsap.registerPlugin(useGSAP);

  // Nabvar Ref
  const menuRef = useRef(null);
  const itemsRef = useRef(null);
  const chevronRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  // HeroSection Ref
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const underlineRef = useRef(null);

  // Gsap Animations Starts
  const tl = gsap.timeline();

  // GSAP animation for dropdown visibility on hover
  useGSAP(() => {
    gsap.from(menuRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(itemsRef.current.children, {
      y: -100,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      stagger: 0.4,
    });
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
    gsap.to(chevronRef.current, {
      rotateX: isHovered ? 180 : 0,
      duration: 0.3,
    });
  }, [isHovered]);

  // GSAP animation for Herosection
  useGSAP(() => {
    tl.from(imgRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
    });

    tl.from(
      textRef.current.children,
      {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
      },
      "-=0.3"
    );
  });

  // GSAP animation for underline
  useGSAP(() => {
    gsap.to(underlineRef.current, {
      scaleX: isUnderlined ? 1 : 0, // Scale to show/hide the underline
      duration: 0.1,
    });
  }, [isUnderlined]);

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <section className="fixed h-[70px] w-full lg:px-32 px-8 flex justify-between bg-[#f4f3e9] z-20 ">
        {/* Logo Section */}
        <div className="flex w-full h-full justify-between items-center">
          <img
            ref={menuRef}
            className="logo h-13 cursor-pointer"
            src={Logo}
            alt="The Dalai Lama"
          />

          {/* Navigation Links */}
          <div
            ref={itemsRef}
            className="flex h-18 text-xl font-[600] gap-6 py-4 items-center "
          >
            {/* Podcast Dropdown */}
            <div
              className="relative lg:flex hidden items-center gap-2 cursor-pointer h-8 "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Podcast
              <div ref={chevronRef}>
                <IoChevronDown className="icon" />
              </div>
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
      <section className="top-[80px] py-8 sm:px-12 lg:py-24 lg:grid lg:grid-cols-12 relative flex-1 md:py-32">
        <div className="px-6  sm:px-0 sm:pr-8 w-screen space-y-8">
          <div className="w-full top-30 flex  justify-center ">
            <img
              className="w-[50vw] flex  justify-center object-cover  lg:w-[55vw] md:w-[45vw] sm:w-[40vw] md:absolute  md:bottom-0 sm:right-0 lg:absolute lg:-bottom-10 md:right-[-100px] lg:right-[-200px] h-fit   z-10 "
              ref={imgRef}
              src={Lama}
              alt="Dalai Lama"
            />
          </div>
          <div
            ref={textRef}
            className="lg:col-span-8 lg:space-y-5 relative space-y-4 lg:pr-[35vw] md:pr-[35vw] md:px-8 w-full"
          >
            <div
              className="flex flex-col h-fit w-full handwritten text-5xl lg:text-[60px] relative lg:inline-block cursor-pointer md:text-[60px]"
              onMouseEnter={() => setIsUnderlined(true)}
              onMouseLeave={() => setIsUnderlined(false)}
            >
              The Dalai Lama's
              <div
                ref={underlineRef}
                className="w-fit absolute top-[45px] lg:top-[33px] left-16 h-[2px] bg-black scale-x-0 transition-transform font-serif "
                style={{ width: "250px" }} // Make it full width
              ></div>
            </div>
            <div
              className="lowerText md:pt-8 uppercase font-bold
            leading-[1.2] tracking-wider lg:tracking-[0.132em] text-3xl lg:text-[60px] md:text-[30px]"
            >
              Guide to Happiness
            </div>

            <div className=" text-lg font-normal tracking-wider leading-relaxed lg:text-[20px] md:font-medium lg:tracking-widest md:leading-loose ">
              We went halfway around the world to find out what it actually
              takes to become happier. Journey with us and learn how to train
              your mind to be happier over time alongside the most qualified
              people on the planet - including the Dalai Lama.
            </div>
            <button className="py-4 px-8 bg-black text-white rounded-[50px] font-semibold md:leanding-loose md:text-[20px]">
              Join the Course
            </button>
          </div>
        </div>
      </section>
      <div className="w-full bottom-[-10px]">
        <img className="" src={PageEndSvg} alt="endsvg" />
      </div>
    </div>
  );
};

export default HeroSection;
