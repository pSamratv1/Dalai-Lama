import React, { useRef } from "react";
import Circle from "../images/circle.svg";
import Circle1 from "../images/circle1.svg";
import Circle2 from "../images/circle2.svg";

import Anuska from "../images/Anuska.webp";
import Sharon from "../images/Sharon.webp";
import Joseph from "../images/Joseph.webp";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TeacherSection = () => {
  // Register GSAP Hook
  gsap.registerPlugin(useGSAP);

  const container = document.querySelector("#container");
  // useRef
  const headingTextRef = useRef(null);
  const teachersRef = useRef(null);

  // GSAP Animation
  useGSAP(() => {
    var mm = gsap.matchMedia();
    mm.add("(min-width:768px)", () => {
      gsap.from(headingTextRef.current, {
        opacity: 0,
        y: 150,
        duration: 0.6,
        scrollTrigger: {
          trigger: headingTextRef.current,
          start: "top 85%",

          toggleActions: "restart none none none",
        },
        scrub: 2,
      });
      gsap.from(teachersRef.current, {
        opacity: 0,
        y: 200,
        duration: 0.7,
        scrollTrigger: {
          trigger: teachersRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
        scrub: 2,
      });
    });
    mm.add("(max-width:765px)", () => {
      gsap.from(headingTextRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        scrollTrigger: {
          trigger: headingTextRef.current,
          start: "top 85%",

          toggleActions: "restart none none none",
        },
        scrub: 2,
      });
      gsap.from(teachersRef.current, {
        opacity: 0,
        y: 200,
        duration: 0.7,
        scrollTrigger: {
          trigger: teachersRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        scrub: 2,
      });
    });
  });
  return (
    <div className="teacher_section w-full py-32 sm:px-4 md:px-8 lg:px-20">
      <div className="h-full flex flex-col space-y-20 px-4 py-8">
        <div className="flex-col space-y-9 lg:space-y-20 ">
          <div ref={headingTextRef} className="flex flex-col  space-y-4 ">
            <div className="flex lg:flex-col lg:items-center w-full text-[40px] font-bold leading-tight lg:text-[60px] space-x-4">
              <div>Learn from the</div>
              <span className="flex handwritten text-6xl items-center  lg:text-[80px]">
                best teachers
              </span>
              <div>on the planet</div>
            </div>
            <div className="py-1 text-[18px] font-[400] tracking-[0.09rem] leading-[1.7] lg:text-2xl lg:px-[10vw] lg:text-center">
              Our meditation teachers are renowned leaders in the feild. And
              because everyone is different, they offer a variety of approaches
              so you can find the best for you.
            </div>
          </div>
          <div
            ref={teachersRef}
            className="sm:grid sm:grid-cols-12 space-x-9 lg:space-x-16 sm:p-4 md:p-8 lg:p-12"
          >
            {/* Column 1 */}
            <div className="sm:col-span-4 flex flex-col min-h-[40vh] items-center space-y-3">
              <div className="relative">
                <div className="absolute z-20 w-[140px] sm:w-[25vw]  lg:w-[250px]">
                  <img src={Circle} alt="" />
                </div>
                <div className="w-[140px] sm:w-[25vw] lg:w-[250px]">
                  <img src={Anuska} alt="" />
                </div>
              </div>
              <div
                className="text-2xl font-semibold text-center sm:text-xl lg:text-start
                 sm:max-w-[200px] sm:break-words md:max-w-none"
              >
                Anuska Fernandopulle
              </div>
              <div className="text-[19px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-center sm:text-start tracking-[0.08rem] leading-relaxed">
                Anusha has been in meditation practice over 25 years, including
                four years in full-time intensive training in monasteries and
                retreat centers in the US, India, and Sri Lanka.
              </div>
            </div>

            {/* Column 2 */}
            <div className="sm:col-span-4 flex flex-col min-h-[40vh] items-center space-y-3">
              <div className="relative">
                <div className="absolute z-20 w-[140px] sm:w-[25vw] lg:w-[250px]">
                  <img src={Circle1} alt="" />
                </div>
                <div className="w-[140px] sm:w-[25vw] lg:w-[250px]">
                  <img src={Sharon} alt="" />
                </div>
              </div>
              <div
                className="text-2xl font-semibold text-center sm:text-xl 
                 sm:max-w-[200px] sm:break-words flex w-full"
              >
                Sharon Salzberg
              </div>
              <div className="text-[19px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-center sm:text-start tracking-[0.08rem] leading-relaxed">
                A towering figure in the meditation world, Sharon Salzberg is a
                prominent teacher & New York Times best-selling author. She has
                played a crucial role in bringing mindfulness and lovingkindness
                practices to the West.
              </div>
            </div>

            {/* Column 3 */}
            <div className="sm:col-span-4 flex flex-col min-h-[40vh] items-center space-y-3">
              <div className="relative">
                <div className="absolute z-20 w-[140px] sm:w-[25vw] lg:w-[250px]">
                  <img src={Circle2} alt="" />
                </div>
                <div className="w-[140px] sm:w-[25vw] lg:w-[250px]">
                  <img src={Joseph} alt="" />
                </div>
              </div>
              <div
                className="text-2xl font-semibold text-center sm:text-xl lg:text-start
                 sm:max-w-[200px] sm:break-words md:max-w-none"
              >
                Joseph Goldstein
              </div>
              <div className="text-[19px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-center sm:text-start tracking-[0.08rem] leading-relaxed">
                Joseph is one of the most respected meditation teachers in the
                world — a key architect of the rise of mindfulness in our modern
                society — with a sense of humor to boot.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#f4f3e9] border-[#291217] border-2 text-[#291217] border-solid font-semibold px-8 py-4 rounded-[30px] text-lg cursor-pointer">
            Meet The Teachers
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
