// work page
"use client"
import React from 'react'
import Banner from '../Components/MIniComponents/Banner'
import  img1  from '@/public/slider-4.jpg';
import { Image } from 'antd';
import PhotoModule from '../Components/MIniComponents/PhotoModule';
import OurProjects from '../HomeComponents/OurProjects';

export default function page() {
  return (
    <div className='w-full flex flex-col px-4 items-center justify-center pt-6    bg-[#efe4c57a]'>
<Banner  img={img1} title={"Our Work's"}/>

      <OurProjects/>
    </div>
  )
}
