import React from "react";
import PageStart from "../images/brownstart.svg";
import GmAmerica from "../images/GmAmerica.png";
import Rachel from "../images/Rachel.webp";
import NewYorkTimes from "../images/TheNewYorkztimes.png";
import TheView from "../images/TheView.webp";
import WashingTon from "../images/TheWashingtonPost.png";
import Trevor from "../images/TrevorNoah.webp";

import PageEnd from "../images/brownend.svg";

const FeaturedSection = () => {
  return (
    <>
      <img className="" src={PageStart} />
      <section className="h-[50vh] py-20 bg-[#291217]">
        <div className="flex flex-col px-6 space-y-10">
          <div className="sm:relative flex flex-col md:flex-row px-8 sm:px-0 space-y-12 ">
            <div className="flex  space-x-8 items-center sm:justify-around">
              <img
                className="h-[3vh] w-[35vw] mx-auto sm:w-[20vw]"
                src={NewYorkTimes}
                alt="The New York Times"
              />
              <img
                className="w-[30vw] mx-auto  sm:w-[20vw]"
                src={Rachel}
                alt="Rachael"
              />
            </div>
            <div className="sm:absolute flex space-x-8 items-center sm:justify-around">
              <img
                className="w-[20vw] mx-auto  sm:w-[20vw] sm:top-[-55px]"
                src={GmAmerica}
                alt="Good Morning America"
              />
              <img
                className=" flex w-[30vw]  sm:w-[20vw]"
                src={WashingTon}
                alt="The Washington Post"
              />
            </div>
          </div>
          <div className="flex px-8 items-center sm:justify-around">
            <img className="w-[20vw]" src={TheView} alt="The View" />
            <img
              className="h-[3vh] sm:h-full w-[20vw]"
              src={Trevor}
              alt="The Trevor Noah Show"
            />
          </div>
        </div>
      </section>

      <img className="" src={PageEnd} />
    </>
  );
};

export default FeaturedSection;

{
  /* <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-between">

         
          
         
        </div>


        <div className="grid grid-cols-2 gap-4">
          <img className="w-32 mx-auto" src={TheView} alt="The View" />
          <img
            className="w-32 mx-auto"
            src={Trevor}
            alt="The Trevor Noah Show"
          />
        </div> */
}
