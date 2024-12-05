import React from "react";
import "./ButtonSd.css";
import Link from "next/link";

function ButtonSd(props) {
  const {
    link = "/",
    color = "black",
    bgcolor = "white",
    fontsize = "16px",
    fontweight = "bolder",
    text = "Button",
  } = props;

  return (
    <Link
      href={link}
      className="SD-btn"
      rel="noopener noreferrer"
      style={{
        color: color,
        backgroundColor: bgcolor,
        fontSize: fontsize,
        fontWeight: fontweight,
      }}
    >
      {text}
    </Link>
  );
}

export default ButtonSd;
