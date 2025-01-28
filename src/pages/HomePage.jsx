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
        <div className="flex flex-col min-h-[200vh] "> 
            <StarsBackground/>
            <ShootingStars/>
            <div className="flex flex-col flex-grow"> 
                <Hero className="min-h-[80vh]" />
                <About/>
                <ProjectPage/>
            </div>
            
            

        </div>
    );
};

export default HomePage;
