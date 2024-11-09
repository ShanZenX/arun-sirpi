import Image from "next/image";
import React from "react";
import img from "@/public/head-bg.jpg";
import Title from "../Components/Text/Title";
import { Poppins, Raleway } from "next/font/google";
import Banner from "../Components/MIniComponents/Banner";
import ServiceCard from "../Components/cards/ServiceCard";
import img1 from "@/public/ser-1.jpg";
import img2 from "@/public/ser-2.jpg";
import img3 from "@/public/ser-3.jpg";
import img4 from "@/public/ser-4.jpg";
import img5 from "@/public/ser-5.jpg";
import img6 from "@/public/ser-6.jpg";

const raleway = Raleway({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const services = [
  { title: "3D Elevation", img: img1 },
  { title: "Arc Design", img: img2 },
  { title: "House Elevation", img: img3 },
  { title: "Temple Design", img: img4},
  { title: "Interior Design", img: img5 },
  { title: "Ceiling Elevation ", img: img6 },
];

export default function page() {
  return (
    <div className="px-4 pt-6     bg-[#e6b31900]">
      <Banner img={img} title={"Our Service's"} />
      <div className=" w-full flex items-center justify-center flex-col">
        {/* <Title
          title={"Services"}
          miniTitle={"Enjoy the best services from our side"}
        /> */}
        <div className="flex w-[90%] my-10 flex-wrap justify-around ">
        {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} img={service.img} />
      ))}
        </div>
      </div>
    </div>
  );
}
