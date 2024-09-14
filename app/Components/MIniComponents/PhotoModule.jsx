import React from 'react'
import { Image } from 'antd';

export default function PhotoModule({img}) {
  return (
    <div className='md:w-[30%] pb-8'>
      <Image src={img} alt="img"   />
    </div>
  )
}
