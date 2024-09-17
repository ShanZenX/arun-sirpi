"use client";
import React from "react";
import Title from "../Components/Text/Title";
import PhotoModule from "../Components/MIniComponents/PhotoModule";
import img1 from "@/public/head-bg.jpg";
import { Image } from "antd";
export default function OurProjects() {
  return (
    <div className="flex flex-col justify-center items-center my-10">
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
