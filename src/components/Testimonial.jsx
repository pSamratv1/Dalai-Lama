import React from "react";
import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";

const Testimonial = () => {
  return (
    <section className="testimonial h-[50vh] px-4">
      <div className="flex flex-col justify-center py-14 space-y-10">
        <div className="bg-red-400 text-center text-[16px] uppercase font-[600] tracking-[0.3rem]">
          Skeptics Speak
        </div>
        <div className="flex-col text-center space-y-6 min-h-[20vh]">
          <div> Having permission to sit for what ever </div>
          <div>- Jessica</div>
        </div>
        <div className="flex justify-center">
          <img src={LeftArrow} alt="" srcset="" />
          <img src={RightArrow} alt="" srcset="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
