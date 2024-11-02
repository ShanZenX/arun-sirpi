"use client";
// app/HomeComponents/Header.jsx
import React from "react";
import MainCarousel from "./MainCarousel";
import { Poppins, Raleway } from "next/font/google";
import { Button } from "react-bootstrap";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Image from "next/image";
import head1 from "@/public/head-bg.jpg";
import head2 from "@/public/slider-1.jpg";
import head3 from "@/public/slider-4.jpg";
import img3 from "@/public/slider-3.jpg";
import img4 from "@/public/slider-2.jpg";
import img5 from "@/public/ser-1.jpg";
import Link from "next/link";

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
    <div
      className="w-full flex-col  relative flex items-center mt-10 z-0 bg-cover bg-top"
      // style={{ backgroundImage: 'url("/bg.jpg")' }}
    >
      {/* <div className="w-64 h-64 bg-[#000000] blur-[200px] absolute  left-[600px]"></div> */}
      <div className="w-full md:pl-12  items-center flex justify-center   flex-col text-black mt-16 z-10 ">
        <p className={`text-xl font-medium   ${poppins.className}`}>
          Elevate Your House with
        </p>
        <p
          className={` text-7xl md:text-[120px] md:pb-6 text-[#272725]   font-black text-gradient-wave ${raleway.className}`}
        >
          Arun Sirpi
        </p>
        <p
          className={`font-medium text-xl text-center px-2 ${poppins.className}`}
        >
          Come Explore Innovative Cement Elevation Designs
        </p>
        <Button className="w-28 mt-3 !bg-[#272725]  border-black">
          <Link href={"./services"} className="text-white no-underline" >          Get Us 
          </Link>
        </Button>
      </div>
      {/* <div className="w-1/2 m-10 " ><MainCarousel/></div> */}
      {/* <div className="flex  w-[95%] flex-wrap gap-2 items-center justify-around py-16">
        <div className="w-full md:w-[99.5%]  h-56 bg-black rounded-2xl shadow-2xl  ">
          <Image
            src={head1}
            alt="header1"
            className="w-full h-56 rounded-2xl object-cover border-black border-2"
          ></Image>
        </div>
        <div className="w-[46%] md:w-[48.5%] h-56 bg-black rounded-2xl shadow-2xl">
          <Image
            src={head2}
            alt="header1"
            className="w-full h-56 rounded-2xl object-cover border-black border-2"
          ></Image>
        </div>
        <div className="w-[46%] md:w-[49.5%] h-56 bg-black rounded-2xl shadow-2xl">
          <Image
            src={head3}
            alt="header1"
            className="w-full h-56 rounded-2xl object-cover object-left-top border-black border-2"
          ></Image>
        </div>
      </div> */}
      <div className="w-[90%] flex  justify-evenly  flex-wrap gap-3 my-10 z-10 relative ">
        <div className="w-full md:w-[99.5%]  h-56 bg-black rounded-2xl shadow-2xl  ">
          <Image
            src={head1}
            alt="header1"
            className="w-full h-56 rounded-2xl object-cover border-black border-2"
          ></Image>
        </div>
        <div className="w-[47%] h-60 md:w-60 md:h-60 bg-black rounded-2xl">
          <Image src={head2} className="w-full h-full rounded-2xl object-cover border-black border-2" alt="img-1"></Image>
        </div>
        <div className="w-[47%] h-60 md:w-60 md:h-60 bg-black rounded-2xl">
        <Image src={head3} className="w-full h-full rounded-2xl object-cover border-black border-2" alt="img-1"></Image>

        </div>
        <div className="w-[47%] h-60 md:w-60 md:h-60 bg-black rounded-2xl">
        <Image src={img3} className="w-full h-full rounded-2xl object-cover border-black border-2" alt="img-1"></Image>

        </div>
        <div className="w-[47%] h-60 md:w-60 md:h-60 bg-black rounded-2xl">
        <Image src={img4} className="w-full h-full rounded-2xl object-cover border-black border-2" alt="img-1"></Image>

        </div>
        <div className="w-[47%] hidden md:flex h-60 md:w-60 md:h-60 bg-black rounded-2xl">
        <Image src={img5} className="w-full h-full rounded-2xl object-cover border-black border-2" alt="img-1"></Image>

        </div>
      </div>
    </div>
  );
}
