// src/pages/HomePage.js
import React, { useRef } from "react";
import Hero from "../components/Hero";
import { ShootingStars } from "../components/ui/shooting-stars"; // 
import { StarsBackground } from "../components/ui/stars-background";
import ProjectPage from "./ProjectPage";
import About from "../components/About";
import Footer from "../components/Footer";
// This is our HomePage component. It renders a Navbar, a Hero component, and a background color.
const HomePage = () => {
    
    return (
        <div className="flex flex-col "> 
            {/* <StarsBackground/>
            <ShootingStars/> */}
            <div className="flex flex-col flex-grow"> 
                <Hero className="" />
                <div className="seperation h-[0.5px] bg-slate-300"></div>
                <About/>
                <div className="seperation h-[0.5px] bg-slate-300"></div>
               <ProjectPage/>
            </div>
        </div>
    );
};

export default HomePage;
