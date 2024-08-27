"use client";
import Stairs from "@/components/Stairs";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
      >
        {[...Array(6)].map((_, index) => (
          <Stairs key={index} index={index} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
