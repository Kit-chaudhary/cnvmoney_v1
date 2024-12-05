"use client";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import Image from "next/image";
import "./Hero.css";
import { motion } from "framer-motion";

export default function CarouselCustomNavigation({ data }) {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const element = document.querySelector(".carousel-slide");
  //   if (element) {
  //     element.classList.add(
  //       "animate__animated",
  //       "animate__backInRight",
  //       "animate__delay-0s"
  //     );

  //     // Clean up the classes when component unmounts
  //     return () => {
  //       element.classList.remove(
  //         "animate__animated",
  //         "animate__backInRight",
  //         "animate__delay-0s"
  //       );
  //     };
  //   }
  // }, []);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  // Function to handle auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clear the interval on unmount to prevent infinite loop
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={nextSlide}
          onSwipeRight={prevSlide}
          className="relative  w-full"
        >
          {data.map((image, index) => (
            <motion.div
              key={index}
              style={{
                display: index === currentSlide ? "block" : "none",
              }}
              className={`
                ${
                  index === currentSlide
                    ? "animate__animated animate__backInRight animate__delay-0s"
                    : "carousel-slide"
                }`}
              variants={imageVariants}
              initial={index === currentSlide ? "visible" : "hidden"}
              animate={index === currentSlide ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: "linear" }}
            >
              <Image
                src={image}
                width={400}
                height={200}
                className="collapse_image"
                alt={`Slide ${index + 1}`}
              />
            </motion.div>
          ))}
        </Swipe>
      </div>

      <div className="relative flex justify-center p-2">
        {data.map((_, index) => (
          <div
            className={
              index === currentSlide
                ? "h-1 w-6 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                : "h-1 w-3 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
            }
            key={index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
