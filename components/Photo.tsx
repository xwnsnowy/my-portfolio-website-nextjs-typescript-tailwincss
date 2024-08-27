"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeIn" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7, ease: "easeInOut" }}
        >
          <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-normal absolute">
            <Image
              src="/assets/home-img.png"
              priority
              quality={100}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253" //  Đặt tọa độ trung tâm của hình tròn.
            cy="253" //  Đặt tọa độ trung tâm của hình tròn.
            r="250" // Đặt bán kính của hình tròn.
            stroke="#00ff99" // Đặt màu viền của hình tròn.
            strokeWidth="4" // Đặt độ dày của viền.
            strokeLinecap="round" //Đặt kiểu kết thúc của đường viền là tròn.
            strokeLinejoin="round" // Đặt kiểu kết thúc của đường viền là tròn.
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }} // Trạng thái chuyển động của hình tròn
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
