import Image from "next/image";
import React from "react";
import img from "@/public/slider-4.jpg";

export default function ServiceCard() {
  return (
    <div className="group bg-[#000] font-montserrat h-[660px] flex flex-col items-start justify-between w-full mb-10 md:w-[30%] gap-4 text-white md:h-[605px] rounded-2xl p-3 hover:scale-105 duration-700 transition-all">
      <Image src={img} alt="img" className="h-4/6 rounded-2xl" />
      <div className="flex flex-col items-start justify-evenly h-full mb-3">
        <p className="font-bold p-0 text-2xl text-[#d2f65a]">Services</p>
        <p className="font-thin pb-3 tracking-wider leading-relaxed text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          inventore odit deserunt, itaque, quaerat autem molestias repellendus
          ut hic perspiciati
        </p>
      </div>
    </div>
  );
}
