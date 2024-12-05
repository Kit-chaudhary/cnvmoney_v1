import React from "react";
import "./Preloader.css";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="preloader">
      <Image src="/loading.gif" alt="loading" width={50} height={50} />
    </div>
  );
};

export default Preloader;
