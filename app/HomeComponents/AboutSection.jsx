"use client";
import React from "react";
import MainCarousel from "./MainCarousel";
import Title from "../Components/Text/Title";

export default function AboutSection() {
  return (
    <div className="flex-col w-full md:w-[90%] text-center h-full flex justify-evenly rounded-xl p-3 md:p-10 ">
            <Title title={"About ArunSirpi"} miniTitle={"Best Custom Elevation company in chennai"} />

      <div className="w-[100%] flex bg-black flex-wrap p-3 md:p-10 my-10 rounded-xl justify-evenly gap-10 items-center ">
        <div className="w-full  md:w-[35%]  h-full ">
          <MainCarousel />
        </div>
        <div className="md:w-[60%] h-full flex flex-col text-gree  justify-center">
          <p className="text-[#d2f65a] font-raleway font-semibold text-4xl">ArunSirpi</p>
          <p className=" font-raleway font-thin text-xl text-white leading-[35px] tracking-widest">
          Arun Sirpi is one of the leading specialists in custom building elevations, renowned for having some of the best artists in Chennai. Recognized among the Top 10 Building Elevation Companies, we specialize in premium residential architectural elevations, offering cutting-edge designs for projects ranging from luxury villas to stunning beach houses. Our work blends modern innovation with timeless elegance, making us the go-to choice for contemporary architecture.
          </p>
        </div>
      </div>
    </div>
  );
}
