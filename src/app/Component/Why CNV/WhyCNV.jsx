"use client";
import React from "react";
import "./WhyCNV.css";
import pensil from "../pensil.png";
import MPOP from "../../assets/WhyCNV/shoping_cart.svg";
import MBch from "../../assets/WhyCNV/multiplebranches.svg";
import CPR from "../../assets/WhyCNV/growth.svg";
import Up from "../../assets/WhyCNV/upgrade.svg";
import SMC from "../../assets/WhyCNV/socialmeadia.svg";
import GYS from "../../assets/WhyCNV/coin.svg";
import PDS from "../../assets/WhyCNV/security.svg";
import Image from "next/image";
import { useEffect } from "react";

function WhyCNV() {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      ScrollReveal().reveal(".WhyCNV-mainContainer", {
        delay: 300,
        distance: "100px",
        origin: "bottom",
        duration: 1000,
        easing: "ease",
        reset: true,
      });
    };
    loadScrollReveal();
  }, []);
  return (
    <div className="WhyCNV-mainContainer">
      <div className="WhyCNV-main">
        <div className="WhyCNV-containerDesc">
          <h1 className="text-gray-700">Why Credit & Vault(C&V) ?</h1>
          {/* <Image src={pensil} alt="Header Line" width={200} height={15} /> */}
        </div>

        <div className="WhyCNV-FirstCards">
          <ul>
            <li>
              <p>
                <span className="WhyCNV-FCimg">
                  <Image src={MPOP} alt="" width={50} height={50} />
                </span>
                <span className="WhyCNV-FCdes text-gray-500">
                  Multiple Products on One Platform
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="WhyCNV-FCdes text-gray-500">
                  Multiple branches available for customer support
                </span>
                <span className="WhyCNV-FCimg">
                  <Image src={MBch} alt="" width={50} height={50} />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="WhyCNV-FCimg">
                  <Image src={CPR} alt="" width={50} height={50} />
                </span>
                <span className="WhyCNV-FCdes text-gray-500">
                  In the last 10 years, C&V has delivered a return of 12% Plus
                  CAGR in the Customer Portfolios.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="WhyCNV-FCdes text-gray-500">
                  C&V keeps updating its systems to the needs of the clients.
                </span>
                <span className="WhyCNV-FCimg">
                  <Image src={Up} alt="" width={50} height={50} />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="WhyCNV-FCimg">
                  <Image src={SMC} alt="" width={50} height={50} />
                </span>
                <span className="WhyCNV-FCdes text-gray-500">
                  C&V provides regular market updates through Digital Media.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="WhyCNV-FCdes text-gray-500">
                  C&V offers an opportunity to build your own business and
                  generate a secondary source of Income.
                </span>
                <span className="WhyCNV-FCimg">
                  <Image src={GYS} alt="" width={50} height={50} />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="WhyCNV-FCimg">
                  <Image src={PDS} alt="" width={50} height={50} />
                </span>
                <span className="WhyCNV-FCdes text-gray-500">
                  C&V ensures that client financial and personal data are kept
                  safe and secured.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyCNV;
