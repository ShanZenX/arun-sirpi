import React from 'react';
import Title from '../Components/Text/Title';

export default function YoutubeSection() {
  return (
    <div className='w-full flex flex-wrap items-center justify-center'>
      <Title title={"Our Social Media"} miniTitle={"You can view our works on social media"} />
      
      <div className='w-10/12 flex flex-wrap items-center justify-between my-10 gap-10 md:gap-10'>
        {/* YouTube Video 1 */}
        <div className='w-full md:w-[48%]'>
          <iframe
            className='w-full h-64 md:h-80'
            src="https://www.youtube.com/embed/jryYn17_36Y?si=Z3XXaoEGjjBwlke-"
            title="Our Elevation Work Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        {/* YouTube Video 2 */}
        <div className='w-full md:w-[48%]'>
          <iframe
            className='w-full h-64 md:h-80'
            src="https://www.youtube.com/embed/KEiXH0eCYag?si=S8kXnMjlJ7ZvTb02"
            title="Our Elevation Work Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
