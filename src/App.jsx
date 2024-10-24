import React from "react";

import HeroSection from "./components/HeroSection";
import Aboutsection from "./components/Aboutsection";
import TeacherSection from "./components/TeacherSection";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <HeroSection />
      <Aboutsection />
      <TeacherSection />
    </div>
  );
};

export default App;
