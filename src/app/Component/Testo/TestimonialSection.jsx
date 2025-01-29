"use client";
import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import pensil from "../pensil.png";
import { FourAndHalfStar, FiveStar } from "../StarRating/StarRating";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const IMAGES = [
  { id: 1, url: "/TestimonialImage/Prashant.jpg" },
  { id: 2, url: "/TestimonialImage/Vikas.jpeg" },
  { id: 3, url: "/TestimonialImage/Glen.jpg" },
  { id: 4, url: "/TestimonialImage/Harshala.jpg" },
  { id: 5, url: "/TestimonialImage/Alwyn.jpeg" },
  { id: 6, url: "/TestimonialImage/Joseph.jpg" },
  { id: 7, url: "/TestimonialImage/Bharat.jpeg" },
  { id: 8, url: "/TestimonialImage/kein.jpg" },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Prasad Lemos",
    des: "Vice President, HDFC Bank Ltd",
    rate: <FiveStar />,
    text: "CNVMONEY Company has been an excellent partner for my financial journey. Their team's professionalism, expertise and personalized approach have helped me to achieve my investment goals",
  },
  {
    id: 2,
    name: "Vikas Save",
    des: "Director, VDA Infosolutions Pvt.Ltd.",
    rate: <FourAndHalfStar />,
    text: "Amazing and trustworthy investment experience with CNVMONEY team. timely valuable advise enhanced my confidence which ultimately made my portfolio achive my financial goals. Wishing C&V team great success",
  },
  // {
  //   id: 3,
  //   name: "Rajeev Jadhav",
  //   des: "Founder, Moneyedge Fincorp Group",
  //   rate: <FiveStar />,
  //   text: "Credit and Vault are managed by a professional and experienced team with vast knowledge of wealth management. I strongly recommend the company to my investor community",
  // },
  {
    id: 3,
    name: "Glen Gonsalves",
    des: "Co-Founder, Fledon Engineering Works",
    rate: <FourAndHalfStar />,
    text: "I highly recommend CNVMONEY as investments firm for their professional advisory",
  },
  {
    id: 4,
    name: "Harshala Shastri",
    des: "Marketing Head, ICICI Bank",
    rate: <FourAndHalfStar />,
    text: "I strongly recommend CNVMONEY for their wealth of expertise, in-depth knowledge of the industry, customer-first approach, and unbiased advisory services",
  },
  {
    id: 5,
    name: "Alwyn Gonsalves",
    des: "Vice President, Kotak Mahindra Bank",
    rate: <FiveStar />,
    text: "Being in the banking industry for more than two decades, I was looking for a financial coach to manage my wealth professionally.",
  },
  {
    id: 6,
    name: "Dr. Joseph Dsouza",
    des: "Director, Dsouza Hospital ",
    rate: <FourAndHalfStar />,
    text: "My personal and business investment relationship is with CNVMONEY, and I am impressed with the personalised service and professional approach in managing my wealth.",
  },
  {
    id: 7,
    name: "Bharat Raval",
    des: " Regional Manager, State Bank of Mauritius",
    rate: <FiveStar />,
    text: "I have known CNVMONEY since its inception. The company understands client needs and provides financial solutions to meet investment goals.",
  },

  {
    id: 8,
    name: "Kein Pereira",
    des: "Captian, Mideast Ship Management Ltd.",
    rate: <FiveStar />,
    text: "I've been investing with CNVMONEY for several years, and their expertise has truly made a difference in my financial journey. Their team takes the time to understand my goals and risk appetite, providing tailored investment strategies that have consistently delivered strong returns.The transparency, market insights, and personalized guidance I receive give me confidence in every decision. I highly recommend CNVMONEY to anyone looking for a trusted and knowledgeable investment partner",
  },
];

function TestimonialSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const loadScrollReveal = async () => {
      const sr = (await import("scrollreveal")).default();
      sr.reveal(".testimonial-section", {
        delay: 300,
        distance: "100px",
        origin: "bottom",
        duration: 2000,
        easing: "ease",
        reset: false,
      });
    };

    if (typeof window !== "undefined") {
      loadScrollReveal();
    }
  }, [TESTIMONIALS]);
  function rotateImages() {
    setCurrentImage((currentImage) => (currentImage + 1) % IMAGES.length);
  }

  useEffect(() => {
    const intervalId = setInterval(rotateImages, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentImage];

  return (
    <div className="testimonial-container flex justify-center items-center flex-col">
      <h1 className="text-gray-600">Testimonials</h1>
      {/* <Image
        src={pensil}
        alt="Pensil Line"
        className="pensil"
        width={200}
        height={15}
      /> */}
      {/* <Image src={blue} className="blue_image"></Image> */}
      <div className="testimonial-section">
        <TestimonialImages
          images={IMAGES}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
        <TestimonialDetails
          testimonial={currentTestimonial}
          images={IMAGES}
          currentImage={currentImage}
        />
      </div>
    </div>
  );
}

function TestimonialImages({ images, currentImage, setCurrentImage }) {
  function handleImageClick(imageId) {
    setCurrentImage(images.findIndex((image) => image.id === imageId));
  }

  return (
    <div className="leftTestimonial">
      <div className="selected-image-circle">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={`Testimonial ${image.name}`}
            className={`testimonial-image ${
              currentImage === image.id - 1 ? "selected" : ""
            }`}
            onClick={() => handleImageClick(image.id)}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialDetails({ images, currentImage, testimonial }) {
  return (
    <div className="testimonial-details">
      <Image
        src={images[currentImage].url}
        alt={`Selected Testimonial ${images.name}`}
        className="testimonial-image-main"
        width={150}
        height={150}
      />
      <h2>{testimonial.name}</h2>
      <h4>{testimonial.des}</h4>
      <span>{testimonial.rate}</span>
      <p className="text-gray-500">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="quote-icon "
          size="2x"
          // style={{ color: "gray" }}
        />{" "}
        {testimonial.text}{" "}
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="quote-icon"
          size="2x"
          style={{ color: "#999" }}
        />
      </p>
    </div>
  );
}

export default TestimonialSection;
