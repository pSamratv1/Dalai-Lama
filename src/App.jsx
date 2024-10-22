import React from "react";

import HeroSection from "./components/HeroSection";
import Aboutsection from "./components/Aboutsection";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <HeroSection />
      <Aboutsection />
    </div>
  );
};

export default App;
