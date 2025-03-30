import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "../components/Model"
import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/projects"); // Replace with the actual route to your ProjectPage
    };
    const handleNavigationContact = () => {
        navigate("/contact"); // Replace with the actual route to your ProjectPage
    };
    return (
        <div className="relative w-full h-[calc(100vh-3rem)] text-[#1E1E1E] dark:text-white overflow-hidden">
            <div className="relative z-10 flex flex-col items-center h-full justify-center text-center md:flex-row md:text-left">
                {/* Text Section */}
                <div className=" md:w-1/2 flex flex-col justify-center  px-5">
                    <motion.h1
                        className="text-4xl font-extrabold sm:text-6xl"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* bg-gradient-to-r from-[#00FFD1] to-[#3A86FF] */}
                    Hi, I'm <span className=" dark:text-[#E0E0E0] text-[#474747] ">Ayush Rajesh Temkar</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl dark:text-[#B0B0B0] text-[#585757] "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Front-End Developer | Creating immersive web experiences with React.js
                        Next.js, Tailwind CSS, and 3D technologies.
                    </motion.p>
                    <motion.div
                        className="md:flex md:justify-start flex justify-center items-center space-x-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <button onClick={handleNavigation}  className="px-6 py-3 bg-[#00FFD1] text-[#16213E] rounded-md shadow-lg  hover:shadow-[0_0_15px_#00FFD1] transition-all duration-300">
                            View My Work
                        </button>
                        <button onClick={handleNavigationContact} className="px-6 py-3 border-[#00FFD1] text-[#00FFD1] rounded-md shadow-lg hover:bg-[#00FFD1] hover:text-[#16213E] transition-all duration-300">
                            Hire Me
                        </button>
                    </motion.div>
                </div>

                {/* 3D Model Section */}
                <div className="relative w-1/2 h-full flex items-center justify-center overflow-visible">
                    <Canvas style={{ height: "100%", width: "100%" }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 2, 5]} angle={0.15} penumbra={1} />
                        <Stage environment="city" intensity={0.6}>
                        <Model />
                        </Stage>
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default Hero;
