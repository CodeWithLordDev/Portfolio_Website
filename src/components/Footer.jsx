import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-[#020617]">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a
                    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                    href="#"
                    aria-label="CodewithLord logo"
                >
                    <svg
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
                    </svg>
                    <span className="ml-3 text-xl">CodewithLord</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2025 CodewithLord —
                    <a
                        href="#"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Ayush Rajesh Temkar
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.5.5.08.68-.22.68-.48v-1.67c-2.79.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.91-.62.07-.6.07-.6 1 .07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.34-1.09.62-1.34-2.23-.26-4.56-1.12-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.03A9.478 9.478 0 0112 7.83c.85.003 1.71.114 2.52.336 1.91-1.3 2.75-1.03 2.75-1.03.55 1.43.2 2.49.1 2.75.65.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.68-4.55 4.94.35.31.67.92.67 1.86v2.77c0 .26.18.56.68.47A9.974 9.974 0 0022 12c0-5.52-4.48-10-10-10z"></path>
                        </svg>
                    </a>
                    <a
                        className="ml-3 text-gray-500"
                        href="https://twitter.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a
                        className="ml-3 text-gray-500"
                        href="https://linkedin.com/in/your-username"
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
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
