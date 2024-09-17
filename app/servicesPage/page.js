import Image from "next/image";
import React from "react";
import img from "@/public/head-bg.jpg";
import Title from "../Components/Text/Title";
import { Poppins, Raleway } from "next/font/google";
import Banner from "../Components/MIniComponents/Banner";
import ServiceCard from "../Components/cards/ServiceCard";

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
export default function page() {
  return (
    <div className="px-4">
      <Banner img={img} title={"Our Service's"} />
      <div className=" w-full flex items-center justify-center flex-col">
        <Title
          title={"Services"}
          miniTitle={"Enjoy the best services from our side"}
        />
        <div className="flex w-[90%] my-10 flex-wrap justify-around ">
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
          /> <ServiceCard
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
      </div>
    </div>
  );
}
