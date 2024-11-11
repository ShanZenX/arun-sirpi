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
    <div className="w-full  mt-32">
   
      <div className="   relative rounded-2xl  top-0 bg-yellow-950 w-full h-72 opacity-50 items-center text-center justify-center flex">
        <p
          className={`  text-[10vw] font-black text-white ${raleway.className}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
