"use client";
import React from "react";
import "./Contactus.css";
import FormContact from "@/app/Component/form/FormContact";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ContactUs() {
  const containerStyle = {
    // backgroundImage: `url(./connect.webp)`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // position: "relative",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={containerStyle}
          className="pt-24 px-5 flex flex-col md:flex-row justify-center bg-white mb-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="p-5 flex justify-center contact_child_container mt-7">
            {/* Left Content */}
            <div className="p-5 lg:flex justify-center self-center flex-col md:w-1/2 hidden md:block contact_data">
              <div
                className="p-5 shadow_contact"
                // style={{ backgroundColor: "#082c66" }}
              >
                <h1 className="text-3xl ">cnvmoney FinTech Pvt. Ltd.</h1>
                <br />
                <p className="  contact_para">
                  Explore our financial services in mutual funds, insurance,
                  stock market, loans, fixed deposits, PMS, AIF, NPS,
                  Smallcases, Liquiloans, and properties. Contact us using the
                  form.
                </p>
                <br />
                <p className=" contact_para">
                  <strong className="">Note : </strong>Your financial well-being
                  is our priority. Contact us for personalized services!
                </p>
              </div>
            </div>

            <div className="mb-5">
              <FormContact />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactUs;
