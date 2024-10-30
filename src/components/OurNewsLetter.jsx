import React from "react";
import PageStart from "../images/NewsletterStart.svg";

const OurNewsLetter = () => {
  return (
    <section className="relative newsletter-section">
      <img className="top-0" src={PageStart} alt="" />
      <div className="bg-[#EBC341] py-20">
        <div className="px-4">
          <div className="flex flex-col space-y-4">
            <div>The newsletter</div>
            <div>
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
        </div>
      </div>
    </section>
  );
};

export default OurNewsLetter;
