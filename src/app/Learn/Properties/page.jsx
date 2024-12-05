"use client";
import React, { useState } from "react";
import comingsoon from "../../assets/Coming Soon.png";
import "../../comingsoon.css";
import "./properties.css";
import PropertiesCard from "../../Component/Hero/productCarousel";
import image1 from "./building.png";
import image2 from "./building3.png";
import image3 from "./building2.png";
import "../../Component/Hero/Hero.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function Properties() {
  const images = [image1, image2, image3];
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="ComingSoon">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 PropertiesCard">
              <PropertiesCard data={images}></PropertiesCard>
            </div>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  className="w-full md:w-1/2 px-4 property_para"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="flex flex-col">
                    <span className="properties_name">
                      Sunteck Beach Residences
                    </span>
                    <span className="properties_addres">
                      At Vasai By Sunteck
                    </span>
                    <div className="properties_land p-4 bg-slate-200">
                      <div className="p-1 flex flex-col text-gray-500">
                        <span>Land Parcel</span>
                        <span>Floors </span>
                        <span>Possession </span>
                      </div>
                      <div className="p-1 flex flex-col font-bold text-gray-600">
                        <span>50 Acres</span>
                        <span>30 Storeys</span>
                        <span>Dec 2025</span>
                      </div>
                    </div>
                    <div
                      className="p-4 bg-blue-200 flex flex-col mt-1 text-gray-500"
                      style={{ fontSize: "14px" }}
                    >
                      <span>- Sea-Facing Apartments</span>
                      <span>- Early Buy Discounts</span>
                      <span>- 40 Acres Open Spaces</span>
                    </div>
                    <span className="tag mt-4 text-gray-500">
                      Luxurious&nbsp;
                      <span className="text-gray-800 luxurious">
                        2 & 3 BHK
                      </span>{" "}
                      Starts At
                    </span>
                    <p className="mt-4">
                      <span className="price">₹ 90 Lacs</span>&nbsp;
                      <span className="text-gray-500 onwords">Onwards</span>
                    </p>

                    <Link href="/ContactUs">
                      <button className="btn contact_btn flex mt-2">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                  <div className="p-1">
                    <p
                      className="text-gray-500 mt-2"
                      style={{ fontSize: "15px" }}
                    >
                      Tucked away near the pristine shores of Suruchi Beach in
                      Vasai, Suntech Beach Residences offer you a chance to get
                      your dream home by the sea. It offers newly launched 6
                      soaring towers with beautiful 2 and 3 BHK sea-front
                      apartments, which are accompanied by open, green
                      landscaping, modern amenities, and awe-inspiring views.
                      Luxury amenities such as a beach-front clubhouse, water
                      sports, state-of-the-art gyms, & yoga decks are but a few
                      yards away.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
