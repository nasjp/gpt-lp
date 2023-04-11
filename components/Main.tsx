import React from "react";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import CallToAction from "./CallToAction";

const Main: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <CallToAction />
    </div>
  );
};

export default Main;
