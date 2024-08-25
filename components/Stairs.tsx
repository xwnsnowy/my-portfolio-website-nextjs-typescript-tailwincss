import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

interface StairsProps {
  index: number;
}

const Stairs: React.FC<StairsProps> = ({ index }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: reverseIndex(index) * 0.1,
      }}
      variants={stairAnimation}
      className="h-full w-full bg-white relative"
    />
  );
};

export default Stairs;
