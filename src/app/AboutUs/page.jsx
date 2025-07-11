"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./about.css";
import CeoCard from "./CeoCard";
import Members from "./Members";
import AboutSection from "./AboutSection";
import { motion, AnimatePresence } from "framer-motion";
import Target from "./Target";
function AboutUs() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="w-full bg-white">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="CNVPages bg-white mb-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="CNVPages-main w-full ">
              <h1 className="text-gray-700">About Us</h1>
              <AboutSection></AboutSection>

              <CeoCard></CeoCard>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-1 w-full bg-slate-100 mt-16"></div>
      <Target></Target>
      <div className="h-1 w-full bg-slate-100"></div>
    </div>
  );
}

export default AboutUs;
