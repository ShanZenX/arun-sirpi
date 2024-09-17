"use client";
// app/HomeComponents/Header.jsx
import React from "react";
import MainCarousel from "./MainCarousel";
import { Poppins, Raleway } from "next/font/google";
import { Button } from "react-bootstrap";

// Import fonts
const raleway = Raleway({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return (
    <div className="w-full h-full bg-[#ebeded] relative flex flex-col items-center mt-10 z-0">
      <div className="w-full flex justify-center items-center flex-col text-black mt-16 z-10 px-2">
        <p className={`text-xl font-light  ${poppins.className}`}>
          Elevate Your House with
        </p>
        <p
          className={` text-7xl md:text-[100px] text-center md:-mt-10 font-black text-gradient-wave ${raleway.className}`}
        >
          Arun Sirpi
        </p>
        <p
          className={`font-medium text-xl text-center md:mt-[-20px] ${poppins.className}`}
        >
          Come Explore Innovative Cement Elevation Designs
        </p>
        <Button className="w-28 mt-3 !bg-[#d2f65a] text-black border-black">
          Get Us{" "}
        </Button>
      </div>
      <div className="flex w-[95%] flex-wrap gap-2 items-center justify-around py-16">
        <div className="w-full h-56 bg-black rounded-2xl"></div>
        <div className="w-[46%] h-56 bg-black rounded-2xl"></div>
        <div className="w-[46%] h-56 bg-black rounded-2xl"></div>


      </div>
      <div className="w-[90%] justify-evenly  flex-wrap gap-3 my-10 z-10 relative md:flex hidden">
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
        <div className="w-60 h-60 bg-black rounded-2xl"></div>
      </div>
    </div>
 
  );
}
