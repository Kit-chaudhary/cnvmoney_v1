import React from "react";
import "./hrLine.css";
import { EffectRight,EffectLeft } from "../Effect/Effect";

function HrLineRight() {
  return (
    <>
      <EffectRight><div className="HrLineRight"></div></EffectRight> 
    </>
  );
}

function HrLineLeft() {
    return (
      <>
        <EffectLeft><div className="HrLineLeft"></div></EffectLeft> 
      </>
    );
  }


export {HrLineRight,HrLineLeft};
