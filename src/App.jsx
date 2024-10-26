import React from "react";

import HeroSection from "./components/HeroSection";
import Aboutsection from "./components/Aboutsection";
import TeacherSection from "./components/TeacherSection";
import FeaturedSection from "./components/FeaturedSection";

const App = () => {
  return (
    <div className="h-[60vh] w-screen">
      <HeroSection />
      <Aboutsection />
      <TeacherSection />
      <FeaturedSection />
    </div>
  );
};

export default App;
