import React from 'react';
import Photo from './Photo';
import { Image } from 'antd'; // Ensure this is imported
import Title from '../Text/Title';

const SmallGallery = () => {
  const images = Array.from({ length: 39 }, (_, i) => `img${i + 1}.jpeg`);

  return (
      <div className="w-full gap-1 mb-10 flex justify-content-evenly flex-wrap">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
             <Title
                  title="Image Gallery"
                  miniTitle="Explore our collection of videos showcasing our work and projects."
                />
          {images.map((image, index) => (
            <Photo key={index} img={image} />
          ))}
        </Image.PreviewGroup>
      </div>
  );
};

export default SmallGallery;
