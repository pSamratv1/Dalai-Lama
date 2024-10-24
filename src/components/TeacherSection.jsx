import React from "react";
import Circle from "../images/circle.svg";
import Circle1 from "../images/circle1.svg";
import Circle2 from "../images/circle2.svg";

import Anuska from "../images/Anuska.webp";
import Sharon from "../images/Sharon.webp";
import Joseph from "../images/Joseph.webp";

const TeacherSection = () => {
  return (
    <div className="teacher_section w-full py-20 ">
      <div className="h-full flex flex-col space-y-20 px-4 ">
        <div className="flex-col space-y-9 ">
          <div className="flex flex-col space-y-8 ">
            <div className=" text-[32px] font-bold leading-tight ">
              Learn from the best teacher on the planet
            </div>
            <div className="py-1 text-lg font-[500] tracking-[0.09rem] leading-[1.7]">
              Our meditation teachers are renowned leaders in the feild. And
              because everyone is different, they offer a variety of approaches
              so you can find the best for you.
            </div>
          </div>
          <div className="flex flex-col space-y-9 ">
            <div className=" flex justify-center items-center relative">
              <div className="absolute z-20 w-[140px]">
                <img src={Circle} alt="" />
              </div>

              <div className="w-[140px]">
                <img src={Anuska} alt="" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center text-2xl font-semibold">
                Anuska Fernandopulle
              </div>
              <div
                className="flex text-[19px]
              font-normal text-center tracking-[0.08rem] leading-relaxed"
              >
                Anusha has practiced meditation for over 25 years, including
                four years in full-time intensive training in monastries and
                retreat center in the US, India and Sri Lanka.
              </div>
            </div>

            <div className=" flex justify-center items-center relative">
              <div className="absolute z-20 w-[140px]">
                <img src={Circle1} alt="" />
              </div>

              <div className="w-[140px]">
                <img src={Sharon} alt="" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center text-2xl font-semibold">
                Sharon Salzberg
              </div>
              <div
                className="flex text-[19px]
              font-normal text-center tracking-[0.08rem] leading-relaxed"
              >
                A towering figure in the meditation world, Sharon Salzberg is a
                prominent teacher & New York Times best-selling author. She has
                played a crucial role bringing mindfulness and lovingkindness
                practices to the West.
              </div>
            </div>
            <div className=" flex justify-center items-center relative">
              <div className="absolute z-20 w-[140px]">
                <img src={Circle} alt="" />
              </div>

              <div className="w-[140px]">
                <img src={Joseph} alt="" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center text-2xl font-semibold">
                Joseph Goldstein
              </div>
              <div
                className="flex text-[19px]
              font-normal text-center tracking-[0.08rem] leading-relaxed"
              >
                Joseph is one of the most respected meditation teachers in the
                world — a key architect of the rise of mindfulness in our modern
                society— with a sense of humor to boot.
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
