import React from "react";
import phoneImg from "../images/iphone_app.webp";

const Aboutsection = () => {
  return (
    <div className="h-full w-full bg-[#ECC342] py-20 overflow-y-hidden">
      <div className="flex flex-col space-y-16 lg:grid lg:grid-cols-12 px-4">
        <div className="flex flex-col space-y-6 lg:col-span-6 ">
          <div className="handwritten flex justify-start items-center text-4xl space-x-2">
            <span className="lowerText text-4xl font-bold">Drop in</span>
            <span>daily</span>
          </div>
          <div className="text-lg font-normal leading-relaxed tracking-widest text-opacity-90">
            With the Ten Percent Happier app, you'll access pratical teachings
            alongside guided meditaions to make mindfulness into a habit you
            carry everywhere.
          </div>
          <button className="w-full bg-black text-white font-medium py-4 rounded-[30px] max-w-36">
            Try Free
          </button>
        </div>
        <div className=" flex lg:col-span-6">
          <div className="pr-48 pt-4">
            <img src={phoneImg} alt="Ten Percent Happiness App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
