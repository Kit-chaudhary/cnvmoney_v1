import React from "react";
import comingsoon from "../assets/Coming Soon.png";
import Image from "next/image";

function Blog() {
  return (
    <>
      <div className="CNVPages">
        <div className="CNVPages-main">
          <h1>Blog</h1>
          <Image src={comingsoon} alt="Blog Page" width={900} height={900}/>
        </div>
      </div>
    </>
  );
}

export default Blog;
