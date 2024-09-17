import React from 'react'
import { Image } from 'antd';

export default function PhotoModule({img}) {
  return (
    <div className='md:w-[30%] pb-8 mb-14 rounded-xl h-96'>
      <Image src={img} alt="img"  className='rounded-xl w-full object-cover !h-96' width={"390px"} height={"500"} />
    </div>
  )
}
