import React, { useEffect, useState,useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
    onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full   text-gray-800 dark:text-white transition duration-300"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
