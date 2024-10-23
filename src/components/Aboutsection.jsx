import React, { useEffect, useRef } from "react";
import phoneImg from "../images/iphone_app.webp";
import gsap from "gsap";
import PageEndSvg from "../images/smallcurve.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Aboutsection = () => {
  // Register GSAP Hook
  gsap.registerPlugin(useGSAP);

  const container = document.querySelector("#container");
  // useRef
  const textRef = useRef(null);
  const iphoneRef = useRef(null);

  // Text Animation
  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 50,
      duration: 0.6,
      delay: 0.2,
      scrub: 2,
    });

    gsap.to(iphoneRef.current, {
      y: -150,
      duration: 0.4,
      scrollTrigger: {
        trigger: iphoneRef.current,
        start: "top 100%",
        end: "top -60%",
        scrub: 2,
        toggleActions: "restart none none none",
      },
    });
  });

  return (
    <div className="relative overflow-x-hidden flex flex-col">
      <section className=" h-[calc(100vh-160px)] w-full bg-[#ECC342] py-20 overflow-y-hidden">
        <div className="flex flex-col space-y-16 lg:grid lg:grid-cols-12 px-4">
          <div ref={textRef} className="flex flex-col space-y-6 lg:col-span-6 ">
            <div className="handwritten flex justify-start items-center text-4xl space-x-2">
              <span className="lowerText text-4xl font-bold">Drop in</span>
              <span>daily</span>
            </div>
            <div className="text-lg font-normal leading-loose tracking-widest text-opacity-90">
              With the Ten Percent Happier app, you'll access practical
              teachings alongside guided meditations to make mindfulness into a
              habit you carry everywhere.
            </div>
            <button className="w-full bg-black text-white font-medium py-5 rounded-[30px] sm:max-w-36">
              Try Free
            </button>
          </div>
          <div id="container" className="flex lg:col-span-6">
            <div className="pr-[172px] pt-20 ">
              <img
                ref={iphoneRef}
                src={phoneImg}
                alt="Ten Percent Happiness App"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full absolute z-0 md:bottom-0 sm:bottom-0 bottom-0">
        <img className="" src={PageEndSvg} alt="endsvg" />
      </div>
    </div>
  );
};

export default Aboutsection;
