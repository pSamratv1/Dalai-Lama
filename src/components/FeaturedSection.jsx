import React, { useEffect, useRef } from "react";
import PageStart from "../images/brownstart.svg";
import GmAmerica from "../images/GmAmerica.png";
import Rachel from "../images/Rachel.webp";
import NewYorkTimes from "../images/TheNewYorkztimes.png";
import TheView from "../images/TheView.webp";
import WashingTon from "../images/TheWashingtonPost.png";
import Trevor from "../images/TrevorNoah.webp";
import PageEnd from "../images/brownend.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FeaturedSection = () => {
  const containerRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.4,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Start animation when top of the container is at 75% of the viewport height
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
      },
    });
  });

  return (
    <>
      <img className="" src={PageStart} />
      <section className="h-[50vh] py-20 px-8 sm:px-12 md:px-16 lg:px-44 bg-[#291217]">
        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 px-6 items-center"
        >
          <img
            className="w-[15vw] h-auto mx-auto"
            src={NewYorkTimes}
            alt="The New York Times"
          />
          <img className="w-[12vw] h-auto mx-auto" src={Rachel} alt="Rachael" />
          <img
            className="w-[12vw] h-auto mx-auto"
            src={GmAmerica}
            alt="Good Morning America"
          />
          <img
            className="w-[15vw] h-auto mx-auto"
            src={WashingTon}
            alt="The Washington Post"
          />
          <img
            className="w-[12vw] h-auto mx-auto md:col-span-2"
            src={TheView}
            alt="The View"
          />
          <img
            className="w-[12vw] h-auto mx-auto md:col-span-2"
            src={Trevor}
            alt="The Trevor Noah Show"
          />
        </div>
      </section>
      <img className="" src={PageEnd} />
    </>
  );
};

export default FeaturedSection;
