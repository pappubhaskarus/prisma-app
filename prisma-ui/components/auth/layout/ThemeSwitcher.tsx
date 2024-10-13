"use client";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineNightlightRound } from "react-icons/md";

import { ThemeContext } from "@/provider/ThemeProvider";
import React, { useContext } from "react";
import { motion } from "framer-motion";


function ThemeSwitcher() {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9, rotate: -90 }}
      className="cursor-pointer"
      onClick={() => toggleTheme()}
    >
      {currentTheme == "light" ? (
        <MdOutlineNightlightRound size={23} />
      ) : (
        <IoIosSunny size={23} />
      )}
    </motion.div>
  );
}

export default ThemeSwitcher;
