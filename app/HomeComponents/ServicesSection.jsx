import React from "react";
import Title from "../Components/Text/Title";
import ServiceCard from "../Components/cards/ServiceCard";
import img1 from "@/public/ser-1.jpg";
import img2 from "@/public/ser-2.jpg";
import img3 from "@/public/ser-3.jpg";
import img4 from "@/public/ser-4.jpg";
import img5 from "@/public/ser-5.jpg";
import img6 from "@/public/ser-6.jpg";
import { Button } from "react-bootstrap";

import "aos/dist/aos.css"; // Import AOS styles

export default function ServicesSection() {
  const services = [
    { title: "3D Elevation", imageSrc: img1 },
    { title: "Arc Design", imageSrc: img2 },
    { title: "House Elevation", imageSrc: img3 },
    { title: "Temple Design", imageSrc: img4 },
    { title: "Interior Design", imageSrc: img5 },
    { title: "Ceiling Elevation ", imageSrc: img6 },
  ];

  return (
    <div className="w-full relative flex flex-col items-center justify-between bg-[#fcf8ec]">
      <Title title={"Services"} miniTitle={"Enjoy the best services from our side"} />
      <div className="flex z-10 justify-evenly flex-wrap w-[90%] gap-5 md:my-10">
        {services.map((service, index) => (
          <ServiceCard key={index} img={service.imageSrc} title={service.title} />
        ))}
      </div>
      <Button className="w-28 md:mt-3 !bg-[#d2f65a] text-black border-black">
        See More
      </Button>
    </div>
  );
}
