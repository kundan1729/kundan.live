import React from 'react';
import { motion } from 'framer-motion';

const LogoLoader: React.FC = () => {
  const hexagonPoints = "50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25";
  
  const hexagonVariants = {
    initial: {
      strokeDasharray: 400,
      strokeDashoffset: -400,
      opacity: 0
    },
    animate: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    exit: {
      strokeDashoffset: 400,
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-28 h-28">
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full absolute"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={hexagonVariants}
        >
          <motion.polygon
            points={hexagonPoints}
            fill="none"
            stroke="rgb(48, 215, 159)"
            strokeWidth="1.8"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_6px_rgba(66,240,182,0.7)]"
          />
        </motion.svg>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <span className="text-2xl font-bold text-accent drop-shadow-[0_0_6px_rgba(66,240,182,0.7)]">
            KD
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoLoader; 