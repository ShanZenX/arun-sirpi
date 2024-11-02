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
    <div className="w-full  mt-20">
   
      <div className="   relative rounded-2xl  top-0 bg-gradient-to-r from-[#000000] to-[#505050] w-full h-96 opacity-80 items-center text-center justify-center flex">
        <p
          className={`  text-[10vw] font-black text-white ${raleway.className}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
