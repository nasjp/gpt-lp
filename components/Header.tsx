import React from "react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container px-4 lg:px-0 mx-auto flex items-center justify-between">
        <a href="/">
          <img
            src="/company-logo.png"
            alt="会社ロゴ"
            className="h-10 rounded-full"
          />
        </a>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
