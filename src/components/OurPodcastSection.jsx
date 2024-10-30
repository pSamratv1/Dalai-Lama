import React from "react";

const OurPodcastSection = () => {
  return (
    <section className="podcast-section w-full py-20">
      <div className="px-6 flex flex-col">
        <div className="flex flex-col space-y-6">
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
        <div></div>
      </div>
    </section>
  );
};

export default OurPodcastSection;
