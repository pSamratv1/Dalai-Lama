import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="bg-[#291217] text-[#f4f3e9] py-20">
        <div className="container mx-auto px-6 lg:px-16 space-y-12">
          {/* Title and Social Icons */}
          <div className="flex flex-col space-y-4">
            <div className="text-3xl font-light leading-snug">
              TEN PERCENT HAPPIER
            </div>
            <div className="flex space-x-4">
              <FaTwitter className="w-5 h-5" />
              <FaFacebookF className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
            </div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-8">
            <div className="flex flex-col space-y-5">
              <div className="text-[#7D7D7D] pb-1 border-b border-[#7D7D7D]">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Offerings
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  App
                </div>
                <div className="uppercase tracking-[0.18rem] text-[15px]">
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
              <div className="text-[#7D7D7D] pb-1 border-b border-[#7D7D7D]">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Resources
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Help Center
                </div>
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Meditation FAQ
                </div>
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Privacy Policy
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="text-[#7D7D7D] pb-1 border-b border-[#7D7D7D]">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Gift
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Give a Gift
                </div>
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Redeem a Gift
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="text-[#7D7D7D] pb-1 border-b border-[#7D7D7D]">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Contact
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Contact Us
                </div>
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Careers
                </div>
                <div className="uppercase tracking-[0.18rem] text-[15px]">
                  Press
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
