import Image from "next/image";
import React from "react";
import { Poppins, Raleway } from "next/font/google";

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
export default function Banner({ img, title }) {
  return (
    <div className="  mx-3 mt-20">
   
      <div className=" bg-black relative rounded-2xl  top-0 bg-gradient-to-r from-[#d2f65a] to-[#b6a2a2] w-full h-96 opacity-80 items-center text-center justify-center flex">
        <p
          className={`  text-[200px] font-black text-black ${raleway.className}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
