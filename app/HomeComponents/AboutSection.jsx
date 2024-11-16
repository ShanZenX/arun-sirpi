"use client";
import React from "react";
import MainCarousel from "./MainCarousel";
import Title from "../Components/Text/Title";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Image from "next/image";
import about from "@/public/arun.jpeg";

export default function AboutSection() {
  return (
    <div className="flex-col   w-full md:w-[90%] text-center h-full flex justify-evenly rounded-xl p-3 md:p-10 ">
      {/* <Title
        title={"About ArunSirpi"}
        miniTitle={"Best Custom Elevation company in chennai"}
      /> */}

      <div className="w-[100%] bg-yellow-950/5 flex  border border-black flex-wrap p-3 md:p-10 mt-24 mb-10 rounded-xl justify-evenly gap-10 items-center ">
        <div className="w-full  md:w-[35%]   ">
          <Image
            src={about}
            alt="about image"
            className=" h-[450px] object-cover rounded-xl w-full"
          ></Image>
        </div>
        <div className="md:w-[60%] text-start h-full flex flex-col text-gree  justify-center">
          <div>
          <p className="text-yellow-950 p-0   font-raleway font-semibold text-4xl md:text-5xl">
            Arun Sirpi
          </p>
          <p className="text-gray-600 font-thin -mt-4">Best Custom Elevation company in chennai</p>
          </div>
          <p className=" font-raleway font-thin text-xl text-black leading-[35px] tracking-wide">
            Arun Sirpi is one of the leading specialists in custom building
            elevations, renowned for having some of the best artists in Chennai.
            Recognized among the Top 10 Building Elevation Companies, we
            specialize in premium residential architectural elevations, offering
            cutting-edge designs for projects ranging from luxury villas to
            stunning beach houses. Our work blends modern innovation with
            timeless elegance, making us the go-to choice for contemporary
            architecture.
          </p>
        </div>
      </div>
    </div>
  );
}
