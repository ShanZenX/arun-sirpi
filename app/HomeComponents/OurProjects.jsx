"use client";
import React from "react";
import Title from "../Components/Text/Title";
import PhotoModule from "../Components/MIniComponents/PhotoModule";
import img1 from "@/public/head-bg.jpg";
import img2 from "@/public/ser-2.jpg";
import img3 from "@/public/slider-1.jpg";
import img4 from "@/public/slider-4.jpg";
import img5 from "@/public/slider-3.jpg";
import img6 from "@/public/slider-2.jpg";
import img7 from "@/public/ser-1.jpg";
import img8 from "@/public/ser-3.jpg";
import img9 from "@/public/ser-4.jpg";

import { Image } from "antd";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Aos from "aos";
export default function OurProjects() {

  return (
    <div className="flex flex-col justify-center items-center my-10"
>      <Title
        title={"Our Project"}
        miniTitle={"See our best projects for our clients "}
      />
      <div className="flex flex-wrap w-11/12 gap-5 pt-10 items-center justify-evenly ">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <PhotoModule img={img1.src} />
          <PhotoModule img={img2.src} />
          <PhotoModule img={img9.src} />

          <PhotoModule img={img3.src} />
          <PhotoModule img={img8.src} />

          <PhotoModule img={img4.src} />
          <PhotoModule img={img5.src} />
          
          <PhotoModule img={img6.src} />
          <PhotoModule img={img7.src} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
