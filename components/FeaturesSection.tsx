import React from "react";
import Feature from "./Feature";

const FeaturesSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </section>
  );
};

export default FeaturesSection;
