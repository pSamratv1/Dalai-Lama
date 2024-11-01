import React, { useRef } from "react";
import Circle from "../images/PodcastCircle.png";
import Fill from "../images/Podcastfill.png";
import Img1 from "../images/PodcastImg1.webp";
import Img2 from "../images/PodcastImg2.webp";
import Img3 from "../images/PodcastImg3.webp";
import Img4 from "../images/PodcastImg4.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurPodcastSection = () => {
  gsap.registerPlugin(useGSAP);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scale: 0.9,
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
      gap: "-16px",
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
    <section className="podcast-section w-full py-20">
      <div className=" px-8 sm:px-12 md:px-16 lg:px-44 flex flex-col space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6 lg:order-2 lg:justify-center">
            <div className="text-4xl font-semibold">Our Podcasts</div>
            <div className="text-lg font-normal tracking-widest leading-8 ">
              Ten Percent Happier publishes a variety of podcasts that offer
              relatable wisdom designed to help you meet the challenges and
              opportunities in your daily life.
            </div>
            <div>
              <div className="flex w-fit border-[2px] rounded-[40px] border-[#803401]">
                <button className="py-4 px-8 text-lg font-medium rounded-[40px] border-[1px] border-black">
                  See All Books
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-center items-center">
            <div
              ref={containerRef}
              className="grid justify-center items-center w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]"
            >
              <img className="absolute  p-8" src={Fill} alt="" />
              <img className="absolute  p-8" src={Circle} alt="" />

              <div
                ref={imagesRef}
                className=" grid grid-cols-2 grid-rows-2 gap-6"
              >
                <img className="cols-span-1" src={Img1} alt="" />
                <img className="cols-span-1" src={Img2} alt="" />
                <img className="cols-span-1" src={Img3} alt="" />
                <img className="cols-span-1" src={Img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPodcastSection;
