"use client";
import Touch from "./ContactUs.gif";
import ButtonSd from "../Button/Button Two/ButtonSd";
import "./Hero.css";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ProductCarousel from "./productCarousel";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";

const Maven = Maven_Pro({ subsets: ["latin"], weight: ["400"] });

function Hero() {
  const [isVisible, setIsVisible] = useState(true);
  const images = [image1, image2, image3, image4];
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="hero-sec "
            key={"a1"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative flex justify-between flex-wrap flex-row-reverse hero_component">
              <div className="w-full sm:w-1/2 productCarousel">
                {/* <div className=" inset-0 flex justify-center items-center"> */}
                {/* <Image src={Touch} alt="Hero" className="object-cover" />  */}

                <ProductCarousel data={images}></ProductCarousel>

                {/* </div> */}
              </div>
              <div className="hero-main flex justify-center pt-5  w-full sm:w-1/2 flex-col items-center ">
                <h1 className=" text-3xl max-sm:text-3xl font-bold mb-4 hero_header">
                  Where&nbsp;<span className="text-4xl">Trust&nbsp;</span>
                  Meets&nbsp;
                  <span className="text-4xl">Prosperity </span>
                </h1>
                <p
                  className={`pb-4 text-lg text-center max-w-md ${Maven.className}`}
                >
                  Join our trusted family to explore a world of financial
                  opportunities and wealth creation. <br />
                  <span>
                    <Typewriter
                      words={["Connect with Us Now."]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      cursorColor="#0143a2"
                      typeSpeed={100}
                      deleteSpeed={80}
                      delaySpeed={2000}
                    ></Typewriter>
                  </span>
                </p>
                <ButtonSd
                  link="/ContactUs"
                  text="Contact Us"
                  fontsize="16px"
                  color="#0161ff"
                  bgcolor="#e6eefe"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;
