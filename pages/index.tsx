import type { NextPage } from "next";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="w-640">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
