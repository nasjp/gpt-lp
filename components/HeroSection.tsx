import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-8">Headline</h1>
      <button className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-700">
        Call to Action
      </button>
    </section>
  );
};

export default HeroSection;
