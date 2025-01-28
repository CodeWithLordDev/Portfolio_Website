import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from '../../public/assets/images/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import CloseIcon from '../../public/assets/images/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleSVG = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    return (
        <div className="w-full flex justify-center sticky top-0 z-50 ">
            <motion.div
                initial={{ width: 50, height: 50, borderRadius: "50%" }} // Start as a perfect circle
                animate={{ width: "80%", height: "4rem", borderRadius: "25px" }} // Expand with rounded edges
                transition={{
                    duration: 1.5, // Smooth bounce effect
                    ease: [0.17, 0.67, 0.83, 1.7],
                }}
                className="mt-4 bg-red-400 shadow-lg"
            >
                {/* Desktop Naviagtion */}
                <nav className="flex items-center hidden md:flex justify-between p-4 h-full rounded-full">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} // Initially hidden and slightly above
                        animate={{ opacity: 1, y: 0 }} // Fade in and drop down
                        transition={{
                            duration: 0.8,
                            delay: 0.5, // Sync with animations
                            ease: "easeOut",
                        }}
                        className="text-2xl font-bold font-prociono text-white cursor-pointer"
                    >
                        <Link to="/">Tech World</Link>
                    </motion.h1>
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }} // Initially hidden and slightly below
                        animate={{ opacity: 1, y: 0 }} // Fade in and rise up
                        transition={{
                            duration: 0.8,
                            delay: 0.5, // Sync with animations
                            ease: "easeOut",
                        }}
                        className="flex items-center gap-6 font-dmSerif text-white"
                    >
                        <li>
                            <Link to="/" className="hover:text-gray-300 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-300 transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300 transition">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-gray-300 transition">
                                Projects
                            </Link>
                        </li>

                    </motion.ul>
                </nav>

                {/* Mobile Naviagtion */}
                <nav className="flex items-center lg:hidden justify-between p-4 h-full rounded-full">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} // Initially hidden and slightly above
                        animate={{ opacity: 1, y: 0 }} // Fade in and drop down
                        transition={{
                            duration: 0.8,
                            delay: 0.5, // Sync with animations
                            ease: "easeOut",
                        }}
                        className="text-2xl font-bold font-prociono text-white cursor-pointer"
                    >
                        <Link to="/">Tech World</Link>
                    </motion.h1>
                    {/* SVG Icon Toggle */}
                    <div className="svg-container" onClick={toggleSVG}>
                        {isMenuOpen ? (
                            <img
                                src={MenuIcon}
                                alt="Menu Icon"
                                className={`svg-icon  ${isMenuOpen ? 'visible animate' : ''}`}
                            />
                        ) : (
                            <img
                                src={CloseIcon}
                                alt="Close Icon"
                                className={`svg-icon hidden ${!isMenuOpen ? 'visible animate' : ''}`}
                            />
                        )}

                    </div>
                    {/* Menu Links */}
                    {!isMenuOpen && (
                        <motion.ul
                            initial={{ opacity: 0, x: '100%' }} // Start from the right side
                            animate={{ opacity: 1, x: 0 }} // Slide to the original position
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }} 
                            className="flex flex-col  items-start gap-6 font-dmSerif text-white absolute top-0 right-0 bg-slate-600 bg-opacity-50 backdrop:blur-md  p-4 rounded-lg w-1/2 h-[100vh]"
                        >
                            <li>
                            <img
                                src={CloseIcon}
                                alt="Close Icon"
                                className={`svg-icon ${!isMenuOpen ? 'visible animate' : ''}`}
                                onClick={() => setIsMenuOpen(true)}
                            />
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-gray-300  transition"
                                    onClick={() => setIsMenuOpen(true)} // Close menu when clicked
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-gray-300 transition"
                                    onClick={() => setIsMenuOpen(true)} // Close menu when clicked
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-gray-300 transition"
                                    onClick={() => setIsMenuOpen(true)} // Close menu when clicked
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="hover:text-gray-300 transition"
                                    onClick={() => setIsMenuOpen(true)} // Close menu when clicked
                                >
                                    Projects
                                </Link>
                            </li>
                        </motion.ul>
                    )}

                </nav>
            </motion.div>
        </div>
    );
};

export default Navbar;
