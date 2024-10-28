import React from "react";
import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";

const Testimonial = () => {
  return (
    <section className="testimonial h-[50vh] bg-red-400">
      <div className=" p-24">
        <div>Skeptics Speak</div>
        <div>Having permission to sit for what ever </div>
        <div className="flex justify-center">
          <img src={LeftArrow} alt="" srcset="" />
          <img src={RightArrow} alt="" srcset="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
