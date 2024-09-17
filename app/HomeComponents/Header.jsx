"use client";
// app/HomeComponents/Header.jsx
import React from "react";
import MainCarousel from "./MainCarousel";
import { Poppins, Raleway } from "next/font/google";
import { Button } from "react-bootstrap";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import head1 from "@/public/head-bg.jpg"
import head2 from "@/public/slider-1.jpg"
import head3 from "@/public/slider-4.jpg"

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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="w-full h-full bg-[#ebeded] relative flex flex-col items-center mt-10 z-0"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="w-full flex justify-center items-center flex-col text-black mt-16 z-10 px-2">
        <p className={`text-xl font-light  ${poppins.className}`}>
          Elevate Your House with
        </p>
        <p
          className={` text-7xl md:text-[100px] text-center   font-black text-gradient-wave ${raleway.className}`}
        >
          Arun Sirpi
        </p>
        <p
          className={`font-medium text-xl text-center  ${poppins.className}`}
        >
          Come Explore Innovative Cement Elevation Designs
        </p>
        <Button className="w-28 mt-3 !bg-[#d2f65a] text-black border-black">
          Get Us{" "}
        </Button>
      </div>
      <div className="flex w-[95%] flex-wrap gap-2 items-center justify-around py-16">
        <div className="w-full md:w-[99.5%]  h-56 bg-black rounded-2xl shadow-2xl  ">
          <Image src={head1} alt="header1" className="w-full h-56 rounded-2xl object-cover border-black border-2"></Image>
        </div>
        <div className="w-[46%] md:w-[49.5%] h-56 bg-black rounded-2xl shadow-2xl">
        <Image src={head2} alt="header1" className="w-full h-56 rounded-2xl object-cover border-black border-2"></Image>

        </div>
        <div className="w-[46%] md:w-[49.5%] h-56 bg-black rounded-2xl shadow-2xl">
        <Image src={head3} alt="header1" className="w-full h-56 rounded-2xl object-cover object-left-top border-black border-2"></Image>

        </div>
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
