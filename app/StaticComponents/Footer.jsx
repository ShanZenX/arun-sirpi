import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black w-full  text-white py-6 flex item-center justify-center">
      <div className="w-[90%] flex flex-wrap flex-col items-center text-center justify-center gap-10 ">
        <div className="items-center flex flex-col">
          {" "}
          <p className="font-raleway font-black text-[#d2f65a] text-4xl">
            ArunSirpi
          </p>
          <p className="font-poppins text-white font-thin md:max-w-[50%]">
            {" "}
            Arun Sirpi is a top specialist in custom building elevations in
            Chennai. As one of the Top 10 Building Elevation Companies, we offer
            premium designs for luxury villas and beach houses, combining modern
            innovation with timeless elegance.
          </p>
        </div>

        <div className="flex gap-10">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#d2f65a] border border-white rounded-full"
          >
            <Phone className="w-6 h-6 hover:text-gray-400" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#d2f65a] border border-white rounded-full"
          >
            <Facebook className="w-6 h-6 hover:text-gray-400" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#d2f65a] border border-white rounded-full"
          >
            <Twitter className="w-6 h-6 hover:text-gray-400" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#d2f65a] border border-white rounded-full"
          >
            <Instagram className="w-6 h-6 hover:text-gray-400" />
          </Link>
        </div>
        <div className="w-full h-[2px] bg-white"></div>
        <div>
          <p>Design By - <Link href={"https://shanmugaraj.vercel.app/"} target="_blank" className="text-[#d2f65a] no-underline">ShanZenX</Link></p>
        </div>
      </div>
    </footer>
  );
}
