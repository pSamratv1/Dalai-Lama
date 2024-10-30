import React, { useState, useRef, useEffect } from "react";
import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Testimonial = () => {
  // Register GSAP Hook
  gsap.registerPlugin(useGSAP);

  const textRef = useRef(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  const Quote = [
    {
      id: 1,
      quote:
        "Having permission to sit for whatever time I can has helped me to be more regular.",
      author: "Kelly C",
    },
    {
      id: 2,
      quote:
        "A friend asked me to take a two-week challenge with her — now I'm hooked! Just 10 minutes a day & in such a more positive mood.",
      author: "Jessica F",
    },
    {
      id: 3,
      quote:
        "Compared to the other meditation apps out there, this one is the Rolls Royce of meditation apps.",
      author: "John Smith",
    },
  ];

  // Animation logic using GSAP
  useGSAP(() => {
    const fadeInOut = () => {
      const tl = gsap.timeline();
      tl.to(textRef.current, { opacity: 0, duration: 0.5, ease: "power2.in" })
        .call(() => setCurrentQuote((prev) => (prev + 1) % Quote.length))
        .to(textRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });
    };

    const interval = setInterval(fadeInOut, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handlers for left and right arrow clicks
  const handleLeftClick = () => {
    setCurrentQuote((prev) => (prev === 0 ? Quote.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setCurrentQuote((prev) => (prev + 1) % Quote.length); // Fixed logic
  };

  return (
    <section className="testimonial h-[60vh] px-4">
      <div className="flex flex-col justify-center py-20 space-y-8">
        <div className="text-center text-[16px] uppercase font-[600] tracking-[0.3rem]">
          Skeptics Speak
        </div>
        <div className="flex flex-col px-4 py-4 sm:justify-around space-y-4">
          <div
            ref={textRef}
            className="min-h-[21vh] text-center text-2xl font-normal"
          >
            {`" ${Quote[currentQuote].quote} "`}
          </div>
          <div className="text-center text-sm font-medium italic">
            {`- ${Quote[currentQuote].author}`}
          </div>
        </div>
        <div className="flex justify-center space-x-16">
          <img
            className="h-12 cursor-pointer"
            src={LeftArrow}
            alt="Left Arrow"
            onClick={handleLeftClick} // Correct invocation
          />
          <img
            className="h-12 cursor-pointer"
            src={RightArrow}
            alt="Right Arrow"
            onClick={handleRightClick} // Correct invocation
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
