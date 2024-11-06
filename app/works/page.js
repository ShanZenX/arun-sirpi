// work page
"use client"
import React from 'react'
import Banner from '../Components/MIniComponents/Banner'
// import  img1  from '@/public/slider-4.jpg';
import { Image } from 'antd';
import PhotoModule from '../Components/MIniComponents/PhotoModule';
import OurProjects from '../HomeComponents/OurProjects';
import img1 from "@/public/ser-6.jpg";
import img2 from "@/public/ser-2.jpg";
import img3 from "@/public/work-1.jpg";
import img4 from "@/public/work-2.jpg";
import img5 from "@/public/work-3.jpg";
import img6 from "@/public/work-4.jpg";
import img7 from "@/public/work-5.jpeg";
import img8 from "@/public/work-6.jpg";
import img9 from "@/public/ser-4.jpg";

export default function page() {
  return (
    <div className='w-full flex flex-col px-4 items-center justify-center pt-6    bg-[#efe4c57a]'>
<Banner  img={img1} title={"Our Work's"}/>

      <OurProjects/>
      <div className="flex flex-wrap w-11/12 -mt-6 mb-5  gap-5 items-center justify-evenly ">
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
          <PhotoModule img={img7.src} />  
          <PhotoModule img={img8.src} />  
          <PhotoModule img={img6.src} />  
          <PhotoModule img={img5.src} />  
          <PhotoModule img={img4.src} />  




        </Image.PreviewGroup>
      </div>
    </div>
  )
}
