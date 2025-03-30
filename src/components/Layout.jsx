// src/components/Layout.js
import React from "react";
import Navbar from "./Navabr";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full  ">
      {/* Background Layer */}
      <div className=""></div>

      {/* Content */}

      <div className="relative z-10 bg-slate-200 dark:bg-[#0a0a0a] ">
        <Navbar classNamw="" />
        {children}
        <Footer className="bottom-0 border-t-2 border-white"/>

      </div>
    </div>
  );
};

export default Layout;
