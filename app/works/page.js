// work page
"use client";
import React from "react";
import Banner from "../Components/MIniComponents/Banner";
// import  img1  from '@/public/slider-4.jpg';
import { Image } from "antd";
import PhotoModule from "../Components/MIniComponents/PhotoModule";
import OurProjects from "../HomeComponents/OurProjects";
import img1 from "@/public/ser-6.jpg";
import img2 from "@/public/ser-2.jpg";
import img3 from "@/public/work-1.jpg";
import img4 from "@/public/work-2.jpg";
import img5 from "@/public/work-3.jpg";
import img6 from "@/public/work-4.jpg";
import img7 from "@/public/work-5.jpeg";
import img8 from "@/public/work-6.jpg";
import img9 from "@/public/ser-4.jpg";
import { Video } from "../Components/MIniComponents/VIdeo";
import VideoGallery from "../Components/MIniComponents/VideoGallery";
import ImageGallery from "../Components/MIniComponents/ImageGallery";

// export const metadata = {
//   title: "Arun sirpi",
//   description: "Top elevation work in chennai. Work Arun sirpi",
// };

export default function page() {
  return (
    <div className="w-full md:mt-20 flex flex-col px-4 items-center justify-center pt-6    bg-[#e6b31900]">
      {/* <Banner img={img1} title={"Our Work's"} /> */}

      <VideoGallery />
      <ImageGallery />
    </div>
  );
}
