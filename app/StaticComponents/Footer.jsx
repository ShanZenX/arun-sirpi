import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone, YoutubeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black w-full  text-white py-6 flex flex-col item-center justify-center">
      <div className="w-[99%] flex flex-wrap  md:flex-none items-center justify-center ">
        <div className="w-full md:pl-24 md:w-1/2">
          <div className=" flex md:items-start flex-col">
            {" "}
            <p className="font-raleway  px-3 md:px-0  font-black text-[#FFDB58] text-4xl">
              ArunSirpi
            </p>
            <p className="font-poppins text-white  !md:text-left px-3 md:px-0 font-thin ">
              {" "}
              Arun Sirpi is one of the leading specialists in custom building elevations, renowned for having some of the best artists in Chennai. Recognized among the Top 10 Building Elevation Companies, we specialize in premium residential architectural elevations, offering cutting-edge designs for projects ranging from luxury villas to stunning beach houses. Our work blends modern innovation with timeless elegance, making us the go-to choice for contemporary architecture.
            </p>
          </div>

          <div className="flex px-3 pb-4 pt-2 gap-10">
            <a
              href="tel:+918667003923"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#FFDB58] border border-white rounded-full"
            >
              <Phone className="w-6 h-6 hover:text-gray-400" />
            </a>
            <Link
              href="https://www.instagram.com/arunsirpi77/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#FFDB58] border border-white rounded-full"
            >
              <Instagram className="w-6 h-6 hover:text-gray-400" />
              </Link>
            <Link
              href="https://www.youtube.com/@arunsirpi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#FFDB58] border border-white rounded-full"
            >
              <YoutubeIcon className="w-6 h-6 hover:text-gray-400" />
            </Link>
            {/* <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#FFDB58] border border-white rounded-full"
            >
              <Instagram className="w-6 h-6 hover:text-gray-400" />
            </Link> */}
          </div>
        </div>
        <div className=" w-full md:w-1/2 md:px-0 px-4 pb-4 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9294.946232304288!2d80.0931258!3d12.841616804746241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70a8ff6cf1f%3A0xf6a7873c87404a75!2sArun%20Sirpi!5e0!3m2!1sen!2sin!4v1731331418117!5m2!1sen!2sin"
            width="500"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="w-full flex items-center justify-center pt-4" >
        <p>
          Design and Developed By -{" "}
          <Link
            href={"https://shanmugaraj.vercel.app/"}
            target="_blank"
            className="text-[#FFDB58] no-underline"
          >
            ShanZenX
          </Link>
        </p>
      </div>
    </footer>
  );
}
