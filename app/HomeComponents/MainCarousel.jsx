import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import img1 from "@/public/slider-1.jpg";
import img2 from "@/public/slider-2.jpg";
import img3 from "@/public/slider-3.jpg";
import img4 from "@/public/slider-4.jpg";

function MainCarousel() {
  return (
    <Carousel data-bs-theme="dark" className='w-full h-full p-1 bg-white rounded-md' pause="false">
      <Carousel.Item>
        <div className="h-[50vh] w-full relative">
          <Image 
            src={img1} 
            alt='img1' 
            fill
            quality={100} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='rounded-md object-cover' 
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[50vh] w-full relative">
          <Image 
            src={img2} 
            alt='img2' 
            fill
            quality={100} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='rounded-md object-cover' 
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[50vh] w-full relative">
          <Image 
            src={img3} 
            alt='img3' 
            fill
            quality={100} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='rounded-md object-cover' 
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[50vh] w-full relative">
          <Image 
            src={img4} 
            alt='img4' 
            fill
            quality={100} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='rounded-md object-cover' 
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
