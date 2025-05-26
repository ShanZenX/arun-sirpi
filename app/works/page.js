// work page
"use client";
import React from "react";
import VideoGallery from "../Components/MIniComponents/gallery /VideoGallery";
import SmallGallery from "../Components/MIniComponents/SmallGallery";

// export const metadata = {
//   title: "Arun sirpi",
//   description: "Top elevation work in chennai. Work Arun sirpi",
// };

export default function page() {
  return (
    <div className="w-full mt-20 md:mt-20 flex flex-col px-4 items-center justify-center pt-6    bg-[#fcf3dd]">
      {/* <Banner img={img1} title={"Our Work's"} /> */}
      
      <VideoGallery />
      <SmallGallery />
    </div>
  );
}
