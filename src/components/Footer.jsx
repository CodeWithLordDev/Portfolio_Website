import React from 'react';
import { motion } from "framer-motion";
const Footer = () => {
    const [youtubehover, setYoutubeHover] = React.useState(false);
    const [githubhover, setGithubHover] = React.useState(false);
    const [linkdinhover, setLinkdinHover] = React.useState(false);

    return (
        <footer className="text-gray-600 body-font border-t-2 overflow-y-hidden border-white backdrop-blur-md shadow-lg shadow-black/30  ">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a
                    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-400"
                    href="#"
                    aria-label="CodewithLord logo"
                >
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <motion.img 
                        initial={{opacity:0,x:-50}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1.5,delay:0.5}}
                        src="src\assets\images\logo.webp" alt="codewithlord" className="w-10 h-10 rounded-full" 
                    />
                    <motion.span 
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.5,delay:1}}
                    href="/" className="ml-3 text-xl text-gray-700 dar:text-[#E0E0E0]">CodewithLord</motion.span>
                </a>
                <motion.p 
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1.5,delay:1.2}}
                className="text-sm text-gray-600 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2025 CodewithLord —
                    <motion.a
                        initial={{opacity:0,y:50}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:1.5,delay:1.4}}
                        href="#"
                        className="text-gray-500 dark:text-gray-300 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Ayush Rajesh Temkar
                    </motion.a>
                </motion.p>
                <motion.span 
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1.5,delay:1}}
                className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        className="text-gray-500"
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill={githubhover ? "#EAEAEA" : "currentColor"} 
                            onMouseEnter={() => setGithubHover(true)}
                            onMouseLeave={() => setGithubHover(false)}
                            style={{ cursor: "pointer", transition: "0.3s" }}
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.5.5.08.68-.22.68-.48v-1.67c-2.79.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.91-.62.07-.6.07-.6 1 .07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.34-1.09.62-1.34-2.23-.26-4.56-1.12-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.03A9.478 9.478 0 0112 7.83c.85.003 1.71.114 2.52.336 1.91-1.3 2.75-1.03 2.75-1.03.55 1.43.2 2.49.1 2.75.65.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.68-4.55 4.94.35.31.67.92.67 1.86v2.77c0 .26.18.56.68.47A9.974 9.974 0 0022 12c0-5.52-4.48-10-10-10z"></path>
                        </svg>
                    </a>
                    <a
                        className="ml-3 text-gray-500"
                        href="https://www.youtube.com/@CodewithLord"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                    >
                        <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        className=" w-5 h-5" // Default color
        xmlns="http://www.w3.org/2000/svg"
        // fill='currentColor'
        fill={youtubehover ? "#CC0000" : "currentColor"} 
                            onMouseEnter={() => setYoutubeHover(true)}
                            onMouseLeave={() => setYoutubeHover(false)}
                            style={{ cursor: "pointer", transition: "0.3s" }}
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
                        {/* <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            // fill={youtubehover ? "#FF0000" : "#FFFFFF"} // Changes color on hover
                            xmlns="http://www.w3.org/2000/svg"
                            onMouseEnter={() => setYoutubeHover(true)}
                            onMouseLeave={() => setYoutubeHover(false)}
                            style={{ cursor: "pointer", transition: "0.3s" }}
                        >
                            <path d="M549.655 124.083c-6.281-23.619-24.792-42.031-48.312-48.343C452.468 64 288 64 288 64S123.532 64 74.657 75.74c-23.52 6.312-42.031 24.724-48.312 48.343C16 172.693 16 256 16 256s0 83.307 10.345 131.917c6.281 23.619 24.792 42.031 48.312 48.343C123.532 448 288 448 288 448s164.468 0 213.343-11.74c23.52-6.312 42.031-24.724 48.312-48.343C560 339.307 560 256 560 256s0-83.307-10.345-131.917zM232 336V176l144 80-144 80z" />
                             
                        </svg> */}
                    </a>
                    <a
                        className="ml-3 text-gray-500"
                        href="https://www.linkedin.com/in/ayush-temkar-03b26a28a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill={linkdinhover ? "#0077B5" : "currentColor"} 
                            onMouseEnter={() => setLinkdinHover(true)}
                            onMouseLeave={() => setLinkdinHover(false)}
                            style={{ cursor: "pointer", transition: "0.3s" }}
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </motion.span>
            </div>
        </footer>
    );
};

export default Footer;
