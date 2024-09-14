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
      <div className="w-72 h-72 opacity-100 blur-[150px] bg-[#d6d6d6] absolute left-0 top-1/4 z-0"></div>
      <div className="w-full flex justify-center items-center flex-col text-black mt-10 z-10 ">
        <p className={`text-xl font-light  ${poppins.className}`}>
          Elevate Your House with
        </p>
        <p
          className={` text-[100px] -mt-10 font-black text-gradient-wave ${raleway.className}`}
        >
          Arun Sirpi
        </p>
        <p className={`font-medium text-xl mt-[-20px] ${poppins.className}`}>
          Come Explore Innovative Cement Elevation Designs
        </p>
        <Button className="w-28 mt-3 !bg-[#d2f65a] text-black border-black">
          Get Us{" "}
        </Button>
      </div>
      <div className="w-[90%] justify-evenly flex flex-wrap gap-3 my-10 z-10 relative">
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
    // <div className="relative h-[93vh] w-full bg-[#000000] ">
    //   {/* Background Blur Circles */}
    //   <div className="absolute top-3/4 transform -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[50vh] rounded-full bg-purple-700 opacity-90 blur-[250px] z-0"></div>
    //   <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[50vh] rounded-full bg-purple-700 opacity-90 blur-[250px] z-0"></div>

    //   {/* Main Content */}
    //   <div className="flex h-[93vh] justify-center z-10 relative">
    //     <div className="w-1/2 flex justify-center flex-col text-white h-full md:pl-16">
    //       <p className={`text-2xl font-light ${poppins.className}`}>
    //         Elevate Your House with
    //       </p>
    //       <p className={`mt-[-30px] text-[16vh] font-black text-gradient-wave ${raleway.className}`}>
    //         Arun Sirpi
    //       </p>
    //       <p className={`font-light text-xl mt-[-20px] ${poppins.className}`}>
    //         Come Explore Innovative Cement Elevation Designs
    //       </p>
    //       <Button className="w-28 mt-3 !bg-purple-900 text-white border-black">
    //         Get Us
    //       </Button>
    //     </div>

    //     {/* Carousel Section */}
    //     <div className="w-1/2 flex justify-center items-center">
    //       <div className="w-[80%] h-[80%] flex justify-center items-center rounded-lg p-4 shadow-lg">
    //         <MainCarousel />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
