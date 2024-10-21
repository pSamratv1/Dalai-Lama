import React, { useRef } from "react";
import Lama from "../images/DalaiLama.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HeroSection = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);


  useGSAP(() => {
    
  })

  return (
    <section className="h-full py-24 grid grid-cols-12 px-28 w-auto relative">
      <div className="col-span-8 space-y-7">
        <div className="">
          <div className="handwritten text-4xl">
            The <span className="underline ">Dalai Lama</span>'s
          </div>
          <div className="uppercase font-bold tracking-[0.132em] text-7xl pt-8">
            Guide to Happiness
          </div>
        </div>
        <div className="text-2xl font-medium tracking-widest leading-loose mr-32">
          We went halfway around the world to find out what it actually takes to
          become happier. Journey with us and learn how to train your mind to be
          happier over time alongside the most qualified people on the planet -
          including the Dalai Lama.
        </div>
        <button className="py-4 px-8 bg-black text-white rounded-[50px] font-semibold leanding-loose text-lg">
          Join the Course
        </button>
      </div>
      <div className="col-span-3"></div>
      <div className="absolute top-0 right-[-180px]">
        <img
          src={Lama}
          style={{ height: "900px", width: "900px" }}
          alt="Dalai Lama"
        />
      </div>
    </section>
  );
};

export default HeroSection;
