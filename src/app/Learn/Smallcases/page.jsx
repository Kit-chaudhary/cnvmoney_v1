"use client";
import React from "react";
import "./Smallcases.css";
import STU from "./Simple to understand.svg";
import MBP from "./Managed by professionals.svg";
import DFY from "./Designed for you.svg";
import LV from "./LowVolatility.svg";
import Tmtc from "./Thematic.svg";
import LIA from "./LowInv.svg";
import Tks from "./Tracker.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Smallcases() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="SC-mainContainer">
        <div className="SC-main">
          <div className="SC-First">
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  className="SC-FCardItems"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="SC-FCardItem">
                    <Image
                      src={STU}
                      alt="Simple to understand"
                      width={100}
                      height={100}
                    />
                    <h2 className="text-gray-700">Simple to understand</h2>
                    <p className="text-gray-500">
                      Smallcases are modern investing products based on simple
                      ideas you can understand.
                    </p>
                  </div>
                  <div className="SC-FCardItem">
                    <Image
                      src={MBP}
                      alt="Managed by professionals"
                      width={100}
                      height={100}
                    />
                    <h2 className="text-gray-700">Managed by professionals</h2>
                    <p className="text-gray-500">
                      Smallcases are created by India{"'"}s leading finance
                      experts & backed by solid research.
                    </p>
                  </div>
                  <div className="SC-FCardItem">
                    <Image
                      src={DFY}
                      alt="Designed for you"
                      width={100}
                      height={100}
                    />
                    <h2 className="text-gray-700">Designed for you</h2>
                    <p className="text-gray-500">
                      Smallcases are fully customizable. Edit your smallcase
                      constituents any time or create your own smallcase.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="SC-Second">
            <div className="SC-SHeaderDesc">
              <h1 className="text-gray-700">
                There is a smallcase for everyone
              </h1>
              <p className="text-gray-500">
                Looking to start with a small investment or thinking of low
                volatililty? Choose from a diverse menu
              </p>
            </div>
            <div className="SC-SCardItems">
              {/* <Link
                to="https://www.smallcase.com/discover/all?count=11&risk=low"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <div className="SC-SCardItem">
                <Image src={LV} alt="Low Volatility" width={100} height={100} />
                <h2 className="text-gray-700">Low Volatility</h2>
                <p className="text-gray-500">
                  Go for stable returns at low volatility levels
                </p>
              </div>
              {/* </Link> */}
              {/* <Link
                href="https://www.smallcase.com/discover/all?count=11&investmentStrategies=thematic"
                target="_blank"
                rel="noopener noreferrer"
              /> */}
              <div className="SC-SCardItem">
                <Image src={Tmtc} alt="Thematic" width={100} height={100} />
                <h2 className="text-gray-700">Thematic</h2>
                <p className="text-gray-500">
                  Explore portfolios on disruptive ideas & long-term trends
                </p>
              </div>
              {/* </Link>
              <Link
                to="https://www.smallcase.com/discover/all?count=11&minInvest=0-5000&sortBy=popularity&sortOrder=1"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <div className="SC-SCardItem">
                <Image
                  src={LIA}
                  alt="Low Investment Amount"
                  width={100}
                  height={100}
                />
                <h2 className="text-gray-700">Low Inv. Amount</h2>
                <p className="text-gray-500">
                  Start small budget investments for less than &#8377;5000!
                </p>
              </div>
              {/* </Link>
              <Link
                to="https://www.smallcase.com/discover/all?count=11&investmentStrategies=sectorTracker"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <div className="SC-SCardItem">
                <Image src={Tks} alt="Trackers" width={100} height={100} />
                <h2 className="text-gray-700">Trackers</h2>
                <p className="text-gray-500">
                  Take exposure to important sectors of the economy
                </p>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smallcases;
