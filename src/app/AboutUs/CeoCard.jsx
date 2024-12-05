"use client";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Members from "./Members";

const data = [
  {
    name: "Anil Mendonca",
    position: "Chairman & CO-Founder",
    url: "https://www.linkedin.com/in/anil-mendonca-1180261a/",
    imageUrl: "/aboutimage/1.png",
  },
  {
    name: "Sheryl Mendonca",
    position: "CO-Founder",
    url: "https://www.linkedin.com/in/sherylmendonca/",
    imageUrl: "/aboutimage/2.png",
  },
];
const CeoCard = () => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const sr = (await import("scrollreveal")).default();
      sr.reveal(".person_section", {
        delay: 300,
        distance: "100px",
        origin: "bottom",
        duration: 1000,
        easing: "ease",
        reset: false,
      });
    };

    if (typeof window !== "undefined") {
      loadScrollReveal();
    }
  }, [data]);
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-10 mt-10">
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            <span className="" style={{ color: "#0161ff" }}>
              OUR{" "}
            </span>
            <span className="" style={{ color: "#00d382" }}>
              TEAM
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 ">
          {data.map((item, id) => (
            <div
              className={`person_section w-full ${
                item.name === "Anil Mendonca" ? "bg-blue-100" : "bg-slate-100"
              } p-4`}
              key={id}
            >
              <div className="pseudo-partial-border">
                <Image
                  src={item.imageUrl}
                  width={250}
                  height={400}
                  className="image_"
                  alt="image"
                ></Image>
              </div>
              <div className="details mt-6">
                <span className="name_section">
                  <Typewriter
                    words={[item.name]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    cursorColor="#0161ff"
                    typeSpeed={100}
                    deleteSpeed={80}
                    delaySpeed={2000}
                  ></Typewriter>
                </span>
                <span className="position_">{item.position}</span>

                <Link href={item.url}>
                  {" "}
                  <Image
                    src="/linkedin.png"
                    className="linkedIcon"
                    height={50}
                    width={70}
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Members></Members>
    </>
  );
};

export default CeoCard;
