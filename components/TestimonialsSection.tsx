import React from "react";
import Testimonial from "./Testimonial";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
};

export default TestimonialsSection;
