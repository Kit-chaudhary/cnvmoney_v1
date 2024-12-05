import "./product.css";
import React from "react";
import Button from "../Button/Button";
import { EffectUp } from "../Effect/Effect";
import Image from "next/image";

const Product = (props) => {
  return (
    <>
      <EffectUp>
        <div className="image-flip">
          <div className="image-front">
            <Image src={props.image} alt={props.alt} width={250} height={250} />
            <div className="PC-title">
              <h2 className="text-gray-600">{props.title}</h2>
            </div>
          </div>
          <div className="image-back">
            <div className="image-back-item">
              <h3 className="text-gray-700">{props.title}</h3>
              <p className="text-gray-500">{props.desc}</p>
              <Button link={props.link} text="Know More" />
            </div>
          </div>
        </div>
      </EffectUp>
    </>
  );
};

export default Product;
