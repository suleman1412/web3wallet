"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const GradientCircle = () => {
  return (
    <div className='container'>
      <motion.div
        className='circle'
        animate={{
          top: ["0%", "0%", "80%", "80%", "0%"],
          left: ["0%", "80%", "80%", "0%", "0%"],
          borderRadius: [
            "50%",
            "30% 70% 70% 30%",
            "70% 30% 30% 70%",
            "50% 50% 30% 70%",
            "50%",
          ],
          opacity: [1, 0.8, 0.6, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: easeInOut,
        }}
      />
    </div>
  );
};

export default GradientCircle;