// work page
"use client"
import React from 'react'
import Banner from '../Components/MIniComponents/Banner'
import  img1  from '@/public/slider-4.jpg';
import { Image } from 'antd';
import PhotoModule from '../Components/MIniComponents/PhotoModule';

export default function page() {
  return (
    <div className='w-full flex flex-col px-4 items-center justify-center'>
<Banner  img={img1} title={"Our Work's"}/>
<div className="flex flex-wrap  justify-evenly my-10 ">
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
  )
}
