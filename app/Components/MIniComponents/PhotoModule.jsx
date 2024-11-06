import React from 'react';
import { Image } from 'antd';

export default function PhotoModule({ img }) {
  return (
      <Image
        src={img}
        alt="img"
        className='rounded-xl object-cover !h-96 w-full sm:w-[95%]'
        width={"390px"}
        height={"500"}
      />
  );
}
