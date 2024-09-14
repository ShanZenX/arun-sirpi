import React from 'react'
import Title from '../Components/Text/Title'
import ServiceCard from '../Components/cards/ServiceCard'
import img from "@/public/slider-4.jpg";
import { Button } from 'react-bootstrap';

export default function ServicesSection() {
  return (
    <div className='w-full flex flex-col items-center justify-between '>
      <Title title={"Services"} miniTitle={"Enjoy the best services from our side"}/>
      <div className='flex justify-evenly w-[90%] gap-5 my-10'>
      <ServiceCard  imageSrc={img} title={"Services"} paragraph={"Enjoy the best services from our side . Enjoy the best services from our side . Enjoy the best services from our side . "}/>
      <ServiceCard  imageSrc={img} title={"Services"} paragraph={"Enjoy the best services from our side . Enjoy the best services from our side . Enjoy the best services from our side . "}/>
      <ServiceCard  imageSrc={img} title={"Services"} paragraph={"Enjoy the best services from our side . Enjoy the best services from our side . Enjoy the best services from our side . "}/>



      </div>
      <Button className="w-28 mt-3 !bg-[#d2f65a] text-black border-black">
          See More
        </Button>
    </div>
  )
}
