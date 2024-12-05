import React from "react";
import { EffectLeft } from "./Component/Effect/Effect";
import Hero from "./Component/Hero/Hero";
import Product from "./Component/Card/product";
import products from "./Component/Card/products.json";
import WhyCNV from "./Component/Why CNV/WhyCNV";
import SoftFeature from "./Component/Software/SoftFeature";
import ComDetail from "./Component/Company/ComDetail";
import Laptop from "./Component/Laptop/Laptop";
import TestimonialSection from "./Component/Testo/TestimonialSection";
import { HrLineRight, HrLineLeft } from "./Component/HR line/hrLine";

function Home() {
  return (
    <>
      <div>
        <div className="Hero-sec">
          <Hero />
        </div>
        <div className="Product-sec">
          <div className="Product-main">
            {products.map((element) => {
              return (
                <Product
                  key={element.id}
                  image={element.Image}
                  title={element.Title}
                  desc={element.Desc}
                  alt={element.Alt}
                  link={element.Link}
                />
              );
            })}
          </div>
        </div>

        <HrLineRight />
        <div className="WhyCNV">
          <WhyCNV />
        </div>
        <EffectLeft>
          <div className="ComDetail">
            <ComDetail />
          </div>
        </EffectLeft>
        <div>
          <Laptop />
        </div>

        <HrLineLeft />
        <div className="TesSection ">
          <TestimonialSection />
        </div>
        {/* <div className="flex flex-col w-full">
          <div className="divider"></div>
        </div> */}
        <HrLineRight />
        <div className="SoftFeature">
          <SoftFeature />
        </div>
      </div>
    </>
  );
}

export default Home;
