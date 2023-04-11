import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(/hero-background.png)`,
      }}
    >
      <div className="container px-4 lg:px-0 mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          サンプルテキスト
        </h1>
        <p className="text-lg lg:text-xl text-gray-200">
          サンプルテキストの説明文
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
