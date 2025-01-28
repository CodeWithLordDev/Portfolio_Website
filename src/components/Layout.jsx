// src/components/Layout.js
import React from "react";
import Navbar from "./Navabr";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative h-screen w-full bg-slate-950">
      {/* Background Layer */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      {/* Content */}

      <div className="relative z-10">
        <Navbar classNamw="bg-[#020617]" />
        {children}
        <Footer className="bottom-0"/>

      </div>
    </div>
  );
};

export default Layout;
