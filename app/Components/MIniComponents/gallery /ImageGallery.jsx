import React from "react";
import PhotoModule from "../PhotoModule";
import { Image } from "antd";
import img1 from "@/public/ser-6.jpg";
import img2 from "@/public/ser-2.jpg";
import img3 from "@/public/work-1.jpg";
import img4 from "@/public/work-2.jpg";
import img5 from "@/public/work-3.jpg";
import img6 from "@/public/work-4.jpg";
import img7 from "@/public/work-5.jpeg";
import img8 from "@/public/work-6.jpg";
import img9 from "@/public/ser-4.jpg";
import Title from "../../Text/Title";
const images = [img1, img2, img9, img3, img7, img8, img6, img5, img4];

const ImageGallery = () => (
  <div className="flex flex-wrap w-11/12 -mt-6 mb-5 gap-5 items-center justify-evenly">
    <Title
      title="Image Gallery"
      miniTitle="Explore our collection of videos showcasing our work and projects."
    />
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) =>
          console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      {images.map((img, index) => (
        <PhotoModule key={index} img={img.src} />
      ))}
    </Image.PreviewGroup>
  </div>
);

export default ImageGallery;
