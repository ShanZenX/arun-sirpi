import React from "react";
import Title from "../Components/Text/Title";
import ServiceCard from "../Components/cards/ServiceCard";
import img from "@/public/slider-4.jpg";
import { Button } from "react-bootstrap";

import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Aos from "aos";

export default function ServicesSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="w-full flex flex-col items-center justify-between "
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Title
        title={"Services"}
        miniTitle={"Enjoy the best services from our side"}
      />
      <div className="flex justify-evenly flex-wrap w-[90%] gap-5 md:my-10">
        <ServiceCard
          imageSrc={img}
          title={"Services"}
          paragraph={
            "Enjoy the best services from our side . Enjoy the best services from our side . Enjoy the best services from our side . "
          }
        />
        <ServiceCard
          imageSrc={img}
          title={"Services"}
          paragraph={
            "Enjoy the best services from our side . Enjoy the best services from our side . Enjoy the best services from our side . "
          }
        />
        <ServiceCard
          imageSrc={img}
          title={"Services"}
          paragraph={
            "Enjoy the best services from our side . Enjoy the best services from our side . Enjoy the best services from our side . "
          }
        />
      </div>
      <Button className="w-28 md:mt-3 !bg-[#d2f65a] text-black border-black">
        See More
      </Button>
    </div>
  );
}
