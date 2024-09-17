"use client";
import React from "react";
import Title from "../Components/Text/Title";
import PhotoModule from "../Components/MIniComponents/PhotoModule";
import img1 from "@/public/head-bg.jpg";
import { Image } from "antd";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Aos from "aos";
export default function OurProjects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center my-10"
    data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <Title
        title={"Our Project"}
        miniTitle={"See our best projects for our clients "}
      />
      <div className="flex flex-wrap w-11/12 items-center justify-evenly my-10">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
          <PhotoModule img={img1.src} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
