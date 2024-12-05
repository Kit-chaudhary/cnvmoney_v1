"use client";
import React, { useRef } from "react";
import "./Button.css";
import Link from "next/link";
import Image from "next/image";

const Button = ({ handelClick, setNavbar }) => {
  const detailsRef = useRef(null);

  const handleOptionClick = (event) => {
    event.preventDefault();
    handelClick();
    setNavbar(false);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <>
      <details className="dropdown" ref={detailsRef}>
        <summary className="m-1 btn login-box">Login with</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#e6eefe] text-[#0161ff] rounded-box w-40">
          <li className="">
            <Link
              href="https://cnvmoney.my-portfolio.co.in/app/#/login"
              className="login-btn"
              rel="noopener noreferrer"
            >
              Login
            </Link>
          </li>
          <li className="">
            <Link
              href=""
              className="login-btn"
              rel="noopener noreferrer"
              onClick={handleOptionClick}
            >
              <Image
                src="/beta.png"
                width={100}
                height={20}
                alt="beta.png"
              ></Image>
            </Link>
          </li>
        </ul>
      </details>
    </>
  );
};

export default Button;
