import React from 'react';
import { Image } from 'antd';

export default function Photo({ img }) {
    return (
        <div className="p-1 w-[49%] sm:w-[49%] md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Image
                src={img}
                alt="Gallery image"
                width="100%"
                height={200}
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                preview={true}
            />
        </div>
    );
}
