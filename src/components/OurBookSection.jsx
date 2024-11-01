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
    <section className="book-section">
      <img src={BookStart} alt="Decoration" />
      <div className="h-full bg-[#ECC342] py-20">
        <div className="flex flex-col px-8 sm:px-12 md:px-16 lg:px-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              ref={textRef}
              className="flex flex-col space-y-4 lg:justify-center"
            >
              <div className="text-4xl font-semibold">Our books</div>
              <div className="text-lg font-normal tracking-widest leading-8">
                After a panic attack on live TV, ABC news anchor Dan Harris had
                to make some changes. Harris accounts his journey from skeptic
                to meditator.
              </div>
              <div className="flex w-fit border-[2px] rounded-[40px] border-[#803401]">
                <button className="py-4 px-8 text-lg font-medium rounded-[40px] border-[1px] border-black">
                  See All Books
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-[80vw] sm:w-[60vw] md:w-[40vw]">
              <div ref={bookRef} className="relative ">
                <img
                  className="absolute"
                  src={BookWhite}
                  alt="Book decoration"
                />
                <img
                  className="absolute"
                  src={BookCircle}
                  alt="Book decoration"
                />
                <img src={Books} alt="Books" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={BookEnd} alt="Decoration" />
    </section>
  );
};

export default OurBookSection;
