"use client";
import React, { useState } from "react";
import Title from "../../Text/Title";
import Video from "../VideoCusR";

const CustomerVideoReviews = () => {
  const [playVideoIds, setPlayVideoIds] = useState([1]); // First video auto-plays

  const videos = [
    {
      id: 1,
      src: "cus-r1.mp4",
      title: "Customer Review 1",
      poster: "thumbnail1.jpg",
    },
    {
      id: 2,
      src: "vid1.mp4",
      title: "Customer Review 3",
      poster: "thumbnail1.png",
    },
    {
      id: 3,
      src: "cus-r2.mp4",
      title: "Customer Review 2",
      poster: "thumbnail2.png",
    },
  ];

  const handlePlay = (id) => {
    if (!playVideoIds.includes(id)) {
      setPlayVideoIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="w-full gap-1 md:mb-10 flex flex-wrap items-center text-center justify-around">
      <Title
        title="Customer Video Reviews"
        miniTitle="Explore our customer video reviews"
      />
      <div className="w-full gap-1 md:mb-10 flex flex-wrap justify-around">
        {videos.map((video) => (
          <div className="md:w-[24%] w-3/4" key={video.id}>
            <Video
              src={video.src}
              poster={video.poster}
              autoPlay={playVideoIds.includes(video.id)}
              onPlay={() => handlePlay(video.id)}
              lazy={!playVideoIds.includes(video.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerVideoReviews;
