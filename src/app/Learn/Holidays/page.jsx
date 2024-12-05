"use client";
import React, { useState } from "react";
import "./holiday.css";
import Image from "next/image";
import { HolidayData } from "./holidayData";
import { motion, AnimatePresence } from "framer-motion";
import CommingSoon from "./../../assets/Coming Soon.png";

const Page = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <AnimatePresence>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative mt-6">
        <div className="flex flex-wrap -mx-4">
          {HolidayData.map((item, id) => (
            <motion.div
              key={id}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 0.9 }}
            >
              <div
                className="image-container aspect-w-3 aspect-h-2 shadow-lg"
                onMouseEnter={() => setHoveredItem(id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  src={item.img}
                  className="_image"
                  layout="fill"
                  alt="holiday image"
                />
                {hoveredItem === id && (
                  <div className="overlay">
                    <div className="overlay-content">
                      <Image
                        layout="fill"
                        src={CommingSoon}
                        alt="Hover Image"
                        className="bg-white _image"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full text-center bg-base-300 p-2 shadow-lg">
                <h2 className="text-gray-500">{item.name}</h2>
                <p className="text-gray-500">₹{item.des}</p>
              </div>
              <br />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Page;
