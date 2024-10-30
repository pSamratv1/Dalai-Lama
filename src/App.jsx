import React from "react";

import HeroSection from "./components/HeroSection";
import Aboutsection from "./components/Aboutsection";
import TeacherSection from "./components/TeacherSection";
import FeaturedSection from "./components/FeaturedSection";
import Testimonial from "./components/Testimonial";
import OurBookSection from "./components/OurBookSection";
import OurPodcastSection from "./components/OurPodcastSection";
import OurNewsLetter from "./components/OurNewsLetter";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <HeroSection />
      <Aboutsection />
      <TeacherSection />
      <FeaturedSection />
      <Testimonial />
      <OurBookSection />
      <OurPodcastSection />
      <OurNewsLetter />
      <FooterSection />
    </div>
  );
};

export default App;
