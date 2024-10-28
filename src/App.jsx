import React from "react";

import HeroSection from "./components/HeroSection";
import Aboutsection from "./components/Aboutsection";
import TeacherSection from "./components/TeacherSection";
import FeaturedSection from "./components/FeaturedSection";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <HeroSection />
      <Aboutsection />
      <TeacherSection />
      <FeaturedSection />
      <Testimonial />
    </div>
  );
};

export default App;
