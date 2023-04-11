import React from "react";
import CusotomHead from "../components/CusotomHead";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <CusotomHead
        title="gpt lp"
        description="GPT LP"
        ogImage="/og-image.png"
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
