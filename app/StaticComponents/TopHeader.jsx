// components/TopHeader.js
"use client";
import { PhoneIcon, MapPin, Instagram  } from "lucide-react";
import React, { useState, useEffect } from "react";
import { YoutubeIcon } from 'lucide-react';
import { InstagramIcon } from 'lucide-react';

export default function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the top header when scrolling down and show it when scrolling up
  // useEffect(() => {
  //   let lastScrollTop = 0;
  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //       setIsVisible(false); // scrolling down
  //     } else {
  //       setIsVisible(true); // scrolling up
  //     }
  //     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-20 bg-yellow-950 text-white h-[50px] flex items-center justify-between px-2 md:px-5 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex gap-3">
  
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#000000] rounded-full bg-[#FFDB58] grid place-items-center w-8 h-8"
        >
          <YoutubeIcon className="w-6 h-6"/>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#000000] rounded-full bg-[#FFDB58] grid place-items-center w-8 h-8"
        >
          <InstagramIcon className="w-6 h-6 "/>
        </a>
      </div>
      <div className="text-smg gap-4 flex items-center justify-center h-[50px]">
        <div className="flex items-center justify-center h-[50px] ">
          <PhoneIcon className="w-4 h-4   mr-2" />{" "}
          <a href="tel:+1234567890" className="text-[#FFDB58] no-underline">
            +1234567890
          </a>
        </div>
        <div className=" hidden md:flex items-center justify-center h-[50px]">
          <MapPin className="w-4 h-4   mr-2" />{" "}
          <a href="tel:+1234567890" className="text-[#FFDB58] no-underline">
            Urapakkam , Chennai
          </a>
        </div>
      </div>
    </div>
  );
}
