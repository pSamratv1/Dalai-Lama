import React, { useRef } from "react";
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

  // GSAP Animation
  useGSAP(() => {
    var mm = gsap.matchMedia();
    mm.add("(min-width:768px)", () => {
      gsap.to(iphoneRef.current, {
        y: -250,
        duration: 0.4,
        scrollTrigger: {
          trigger: iphoneRef.current,
          start: "top 100%",
          end: "top -80%",
          scrub: 2,
          toggleActions: "restart none none none",
        },
      });
      gsap.from(textRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.6,

        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",

          toggleActions: "restart none none none",
        },
        scrub: 2,
      });
    });
    mm.add("(max-width:767px)", () => {
      gsap.to(iphoneRef.current, {
        y: -100,
        duration: 0.4,
        scrollTrigger: {
          trigger: iphoneRef.current,
          start: "top 100%",
          end: "top 40%",
          scrub: 2,
          toggleActions: "restart none none none",
        },
      });
      gsap.from(textRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",

          toggleActions: "restart none none none",
        },
        scrub: 2,
      });
    });
  });

  return (
    <div className="relative overflow-x-hidden flex flex-col">
      <section className="px-8 sm:px-12 md:px-16 lg:px-44 h-[calc(100vh-160px)] w-full bg-[#ECC342] py-12 md:py-40 overflow-y-hidden ">
        <div className="flex flex-col space-y-16 lg:grid lg:grid-cols-12 ">
          <div
            ref={textRef}
            className="flex lg:col-span-6 lg:order-2  lg:pt-[8vw]"
          >
            <div className="flex  flex-col space-y-6 ">
              <div className="handwritten flex justify-start items-center  space-x-2 sm:space-x-4 sm:text-6xl text-4xl">
                <span className="lowerText  font-bold ">Drop in</span>
                <span className="">daily</span>
              </div>
              <div className="text-[18px] sm:text-xl lg:text-2xl lg:min-h-[13vh] font-normal leading-relaxed tracking-widest  text-opacity-90">
                With the Ten Percent Happier app, you'll access practical
                teachings alongside guided meditations to make mindfulness into
                a habit you carry everywhere.
              </div>
              <div className="flex sm:justify-center lg:justify-start">
                <button className="text-sm md:text-2xl w-full bg-black text-white font-medium py-3 md:py-5 rounded-[30px] sm:max-w-[240px] max-w-[40vw]">
                  Try Free
                </button>
              </div>
            </div>
          </div>
          <div id="container" className="lg:col-span-6 lg:order-1">
            <div className="flex lg:justify-center w-full pr-[172px] md:pr-0 pt-12 md:pt-20 ">
              <img
                className="max-w-[41vw] sm:max-w-[30vw] md:max-w-[28vw] lg:max-w-[24vw]"
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
