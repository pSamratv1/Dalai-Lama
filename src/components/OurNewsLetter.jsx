import React, { useRef } from "react";
import PageStart from "../images/NewsletterStart.svg";
import PageEnd from "../images/FooterStart.svg";

import NewsLetterCircle from "../images/NewsLetterCiclr.svg";
import NewsLetterFill from "../images/NewLetterFill.svg";
import NewsLetterImg from "../images/NewsLetterImg.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurNewsLetter = () => {
  gsap.registerPlugin(useGSAP);
  const containerRef = useRef(null);
  const imagesRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scale: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(imagesRef.current, {
      scale: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: imagesRef.current,
        start: "top 100%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });
  return (
    <section className="relative newsletter-section">
      <img className="top-0" src={PageStart} alt="" />
      <div className="bg-[#EBC341] py-14">
        <div className="flex flex-col px-6 space-y-16">
          <div className="flex flex-col space-y-6">
            <div className="text-4xl font-semibold">The newsletter</div>
            <div className="text-lg font-normal tracking-widest leading-8 ">
              Entertaining, insightful articles that will get your synapses
              firing and help you live a happier, more resilient, and more
              connected life.
            </div>
            <div>
              <div className="flex w-fit border-[2px] rounded-[40px] border-[#803401]">
                <button className="py-4 px-8 text-lg font-medium rounded-[40px] border-[1px] border-black">
                  Read The Newsletter
                </button>
              </div>
            </div>
          </div>
          <div className="realtive flex justify-center items-center px-8">
            <div className="absolute" ref={containerRef}>
              <img className="absolute" src={NewsLetterFill} />
              <img src={NewsLetterCircle} />
            </div>

            <img ref={imagesRef} className="w-[40vh]" src={NewsLetterImg} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0">
        <img src={PageEnd} alt="" />
      </div>
    </section>
  );
};

export default OurNewsLetter;
