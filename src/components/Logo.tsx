import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        to="/"
        className="w-10 h-10 bg-dark text-light flex items-center justify-center rounded-full text-1xl font-bold"
        whileHover={{ scale: 1.4 }}
      >
        M
      </MotionLink>
    </div>
  );
};

export default Logo;
