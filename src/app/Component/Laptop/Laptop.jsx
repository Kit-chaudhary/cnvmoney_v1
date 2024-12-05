import React from "react";
import "./Laptop.css";
import pensil from "../pensil.png";
import Image from "next/image";

function Laptop() {
  return (
    <section className="Sec-2">
      <h1 className="pt-4 text-gray-700">Latest Update</h1>
      {/* <Image
        src={pensil}
        alt="Pensil Line"
        className="pensil"
        width={200}
        height={15}
      /> */}
      <div className="Main-Sec-2">
        <div className="container">
          <div className="mockup mockup-macbook loaded opened">
            <div className="part top">
              <Image
                width={500}
                height={100}
                src="/LaptopImages/top copy.svg"
                alt="Laptop"
                className="top laptop_image"
              />
              <Image
                width={500}
                height={100}
                src="/LaptopImages/Fill Cover 1.svg"
                alt="Laptop"
                className="cover laptop_image"
              />

              <video style={{ height: "90%" }} muted controls>
                <source
                  src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Video/funds.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="part bottom">
              <Image
                width={500}
                height={100}
                src="/LaptopImages/Fill Cover 2.svg"
                alt="Laptop"
                className="cover laptop_image"
              />
              <Image
                width={500}
                height={100}
                src="/LaptopImages/Bottom copy.svg"
                alt="Laptop"
                className="bottom laptop_image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Laptop;
