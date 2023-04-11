import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
