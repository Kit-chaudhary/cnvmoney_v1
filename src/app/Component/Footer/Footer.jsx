import React from "react";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/Phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faGooglePlay,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import BottomDetails from "./CNVIT/bottomTag";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = ({ value }) => {
  const logo = value[0]?.logoSecond || "";
  const address = value[0]?.address || "";
  const lastLogo = value[0]?.designByLogo || "";
  const email = value[0]?.email || "";
  const phone = value[0]?.phone || "";
  const amfiReg = value[0]?.amfiReg || "";
  const playStore = value[0]?.playStore || "";
  const appStore = value[0]?.playStore || "";
  return (
    <footer className="">
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-detail">
              {/* {logo ? (
                <Image
                  src={logo}
                  alt="CNVMONEY FinTech Pvt. Ltd. Logo"
                  width={200}
                  height={150}
                />
              ) : (
                <Image
                  src="/Logo.png"
                  alt="CNVMONEY logo"
                  width={250}
                  height={200}
                />
              )} */}
              <Image
                src="/Logo.png"
                alt="CNVMONEY logo"
                width={250}
                height={200}
                className="mb-4"
              />

              <p className="footer-cnv-address text-gray-500 ">
                <span className="text-gray-700 ">Head Office : </span>
                B-207, Gopal CHS, Ambadi Road, Opp- 60 Feet Road, Vasai West,
                Palghar, Maharashtra - 401202
              </p>
              <div className="footer-des">
                <Link href={`mailto:info@cnvmoney.com`}>
                  <MdOutlineEmail
                    src={Mail}
                    alt="Mail icon"
                    className="des-img text-gray-500"
                    // width={50}
                    // height={50}
                  />

                  <p className="text-gray-500">info@cnvmoney.com</p>
                </Link>

                <Link href={`tel:+91${phone}`}>
                  <GiRotaryPhone
                    src={Phone}
                    alt="Phone icon"
                    className="des-img text-gray-500"
                    // width={50}
                    // height={50}
                  />
                  <p className="text-gray-500">+91 {phone}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-up">
              <div className="footer-products max-sm:mb-2">
                <h1 className="text-gray-600">Products</h1>
                <ul className="text-gray-500">
                  <li>
                    <Link href="/Learn/MutualFund" className="link link-hover">
                      Mutual Fund
                    </Link>
                  </li>
                  <li>
                    <Link href="/Learn/StockBroking">Stock Broking</Link>
                  </li>
                  <li>
                    <Link href="/Learn/Insurance">Insurance</Link>
                  </li>
                  <li>
                    <Link href="/Learn/FixedDeposite">Fixed Deposits</Link>
                  </li>
                  <li>
                    <Link href="/Learn/PMSnAIF">PMS/AIF</Link>
                  </li>
                  <li>
                    <Link href="/Learn/Loans">Loans</Link>
                  </li>
                  <li>
                    <Link href="/Learn/Properties">Properties</Link>
                  </li>
                  <li>
                    <Link href="/ContactUs">Holidays</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-quick">
                <h1 className="text-gray-600">Quick Links</h1>
                <ul className="text-gray-500">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link href="/ContactUs">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/TermsConditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-amfi">
                <Image
                  src="/AMFI.png"
                  alt="ASSOCIATION OF MUTUAL FUNDS IN INDIA logo"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500">
                  ASSOCIATION OF MUTUAL FUNDS IN INDIA REGISTERED MUTUAL FUND
                  DISTRIBUTOR
                </p>
                <span className="text-gray-500">{amfiReg}</span>
              </div>
            </div>
            <div className="footer-down">
              <div className="footer-download">
                <h1 className="text-gray-600">Download Links : </h1>
                <Link
                  href={playStore}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="drop-shadow-lg btn_color">
                  <p className="flex flex-row ">
                    <FontAwesomeIcon
                      icon={faGooglePlay}
                      className="w-5 mt-1 "
                    />
                    &nbsp;Google Play
                  </p>
                </Link>
                <Link
                  href={appStore}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="drop-shadow-lg">
                  <p className="flex flex-row">
                    <FontAwesomeIcon icon={faAppStore} className="w-5 mt-1" />
                    &nbsp;App Store
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <ul>
              <li>
                <Link
                  href="https://www.instagram.com/cnvmoney"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icons icons_instagram shadow-lg"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/cnvmoney"
                  rel="noopener noreferrer"
                  target="_blank"
                  // style={{ background: "#0143a2" }}
                  className="icon_body">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="icons icon_facebook shadow-lg"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/cnvmoney">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="icons icon_twitter shadow-lg"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/cnvmoney"
                  rel="noopener noreferrer"
                  target="_blank"
                  // style={{ background: "#0143a2" }}
                  className="icon_body ">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="icons icon_linked shadow-lg"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@cnvmoney"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="icons icon_youtube shadow-lg"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cnvit-main">
        <BottomDetails lastLogo={lastLogo} />
      </div>
    </footer>
  );
};

export default Footer;
