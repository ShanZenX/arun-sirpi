// work page
"use client";
import React from "react";
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
