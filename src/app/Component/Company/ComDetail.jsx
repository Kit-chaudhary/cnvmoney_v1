"use client";
import React from "react";
import "./ComDetail.css";
import { useUserContext } from "@/app/App";

function ComDetail() {
  const { content } = useUserContext();
  const YE = content[0]?.yearsExperience || ""; // Use optional chaining for safety
  const HC = content[0]?.happyClients || "";
  const BS = content[0]?.branches || "";
  const AP = content[0]?.amcPartners || "";

  return (
    <div className="company">
      <div className="company-inner">
        <div className="company-items">
          <div className="company-item">
            <div className="ci-top">{YE}+</div>
            <div className="ci-bottom">Years Experience</div>
          </div>
          <div className="company-item">
            <div className="ci-top">{HC}+</div>
            <div className="ci-bottom">Happy Clients</div>
          </div>
          <div className="company-item">
            <div className="ci-top">{BS}+</div>
            <div className="ci-bottom">Branches</div>
          </div>
          <div className="company-item">
            <div className="ci-top">{AP}+</div>
            <div className="ci-bottom">AMC Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComDetail;
