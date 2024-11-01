import React, { useRef } from "react";
import BookStart from "../images/BookPageStart.svg";
import BookEnd from "../images/BookPageEnd.svg";
import BookCircle from "../images/BookCircle.png";
import BookWhite from "../images/BookWhite.png";
import Books from "../images/Books.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurBookSection = () => {
  // Register GSAP Hook
  gsap.registerPlugin(useGSAP);

  const bookRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",

        scrub: false,
      },
    });
    gsap.from(bookRef.current, {
      scale: 0.6,
      rotate: -20,
      duration: 0.6,
      scrollTrigger: {
        trigger: bookRef.current,
        start: "top 100%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="book-section h-full ">
      <img src={BookStart} alt="" />
      <div className="h-full bg-[#ECC342] py-12">
        <div className="flex flex-col  px-8  sm:px-12 md:px-16 lg:px-44 space-y-10">
          <div ref={textRef} className="">
            <div className="flex flex-col justify-center items-start  space-y-4">
              <div className="text-4xl font-semibold">Our books</div>
              <div className="text-lg font-normal tracking-widest leading-8 ">
                After a panic attack on line TV, ABC news anchor Dan Harris had
                to make some changes. Harris accounts his journey from skeptic
                to meditator.
              </div>
              <div>
                <div className="flex w-fit border-[2px] rounded-[40px] border-[#803401]">
                  <button className="py-4 px-8 text-lg font-medium rounded-[40px] border-[1px] border-black">
                    See All Books
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div ref={bookRef} className="relative">
              <img className="absolute" src={BookWhite} alt="" />
              <img className="absolute" src={BookCircle} alt="" />
              <img src={Books} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src={BookEnd} alt="" />
    </section>
  );
};

export default OurBookSection;
