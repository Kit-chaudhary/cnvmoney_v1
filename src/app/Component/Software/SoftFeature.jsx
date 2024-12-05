"use client";
import React from "react";
import Software from "./software.png";
import "./SoftFeature.css";
import pensil from "../pensil.png";
import PVR from "./Feature Image/sf_portfolio_icon.svg";
import PR from "./Feature Image/sf_performance_report.svg";
import IV from "./Feature Image/sf_investment_cal.svg";
import MU from "./Feature Image/sf_market_update.svg";
import OT from "./Feature Image/sf_online_transiaction.svg";
import IR from "./Feature Image/sf_insurence_report.svg";
import NFO from "./Feature Image/sf_fund_offer.svg";
import MT from "./Feature Image/singlelogin_multipletracking.svg";
import Image from "next/image";
import point from "./1.png";
import upperPoint from "./upperPoint.png";
import { useState, useEffect } from "react";

function SoftFeature() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width on mount
    setWindowWidth(window.innerWidth);

    // Add event listener only on client-side
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      ScrollReveal().reveal(".scroll_animation", {
        delay: 300,
        distance: "100px",
        origin: "bottom",
        duration: 2000,
        easing: "ease",
        reset: true,
      });
    };
    loadScrollReveal();
  }, []);
  return (
    <div className="SoftMain relative flex justify-between flex-wrap flex-row ">
      <div className="SoftUp flex justify-center w-full sm:w-1/2 flex-col items-center scroll_animation">
        <h1 className="text-gray-700 mb-4">Platform Features</h1>

        <ul>
          <li>
            <p>
              <span className="SF-img">
                <Image
                  src={PVR}
                  alt="Portfolio View Report"
                  width={50}
                  height={50}
                />
              </span>
              <span className="SF-des text-gray-500">
                Portfolio View Report
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-img">
                <Image
                  src={PR}
                  alt="Performance Report"
                  width={50}
                  height={50}
                />
              </span>
              <span className="SF-des text-gray-500">Performance Report</span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-img">
                <Image
                  src={IV}
                  alt="Investment Calculator"
                  width={50}
                  height={50}
                />
              </span>
              <span className="SF-des text-gray-500">
                Investment Calculator
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-des text-gray-500">Market Updates</span>
              <span className="SF-img">
                <Image src={MU} alt="Market Updates" width={50} height={50} />
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-img">
                <Image
                  src={OT}
                  alt="Online Transaction"
                  width={50}
                  height={50}
                />
              </span>
              <span className="SF-des text-gray-500">Online Transaction</span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-des text-gray-500">Insurance Report</span>
              <span className="SF-img">
                <Image src={IR} alt="Insurance Report" width={50} height={50} />
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-img">
                <Image src={NFO} alt="New Fund Offers" width={50} height={50} />
              </span>
              <span className="SF-des text-gray-500">New Fund Offers</span>
            </p>
          </li>
          <li>
            <p>
              <span className="SF-des text-gray-500">Family Login</span>
              <span className="SF-img">
                <Image
                  src={MT}
                  alt="Multiple Tracking in Single Login"
                  width={50}
                  height={50}
                />
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <div className="SoftImg inset-0 ">
          {windowWidth > 640 ? (
            <Image src={point} alt="Software" width={400} height={700} />
          ) : (
            <Image
              src={upperPoint}
              alt="Software"
              width={200}
              height={200}
              className="center ml-8"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SoftFeature;
