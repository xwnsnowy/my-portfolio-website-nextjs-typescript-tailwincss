"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default PageTransition;
