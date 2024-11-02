import Image from "next/image";
import React from "react";

export default function ServiceCard({ title, img }) {
  return (
    <div className="group bg-[#272725] font-montserrat h-[400px] flex flex-col items-start justify-between w-full mb-10 md:w-[30%] gap-4 text-white md:h-[400px] rounded-2xl p-3 hover:scale-105 duration-700 transition-all">
      <Image src={img} alt={title} className="h-[80%] w-full   object-cover rounded-2xl" />
      <div className="flex items-center justify-center w-full h-full">
        <p className="font-bold text-center text-3xl tracking-wide text-[#efefef]">
          {title}
        </p>
      </div>
    </div>
  );
}
