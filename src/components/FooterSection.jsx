import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="flex flex-col space-y-20 bg-[#291217] h-full text-[#f4f3e9] py-20">
        <div className="flex flex-col px-6 space-y-4">
          <div className="text-3xl flex w-[20vh] font-light leading-snug">
            TEN PERCENT HAPPIER
          </div>
          <div className="grid grid-cols-3 w-[15vh]">
            <FaTwitter className="w-5 h-5" />
            <FaFacebookF className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col  px-6 space-y-9">
          <div className="flex flex-col space-y-5">
            <div className="w-fit flex flex-col text-[#7D7D7D] pb-1 border-b-[#7D7D7D] border-b-[1px]">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Offerings
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                APP
              </div>
              <div className="uppercase tracking-[0.18rem] text-[17px]">
                Podcast
              </div>
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Book
              </div>
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Newsletter
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="w-fit flex flex-col text-[#7D7D7D] pb-1 border-b-[#7D7D7D] border-b-[1px]">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Resources
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Help Center
              </div>
              <div className="uppercase tracking-[0.18rem] text-[17px]">
                Meditation Faq
              </div>
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Privacy policy
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="w-fit flex flex-col text-[#7D7D7D] pb-1 border-b-[#7D7D7D] border-b-[1px]">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Gift
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Give a gift
              </div>
              <div className="uppercase tracking-[0.18rem] text-[17px]">
                Redeem a gift
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="w-fit flex flex-col text-[#7D7D7D] pb-1 border-b-[#7D7D7D] border-b-[1px]">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Contact
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="uppercase tracking-[0.18rem] text-[15px]">
                Contact us
              </div>
              <div className="uppercase tracking-[0.18rem] text-[17px]">
                Careers
              </div>
              <div className="uppercase tracking-[0.18rem] text-[17px]">
                press
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
