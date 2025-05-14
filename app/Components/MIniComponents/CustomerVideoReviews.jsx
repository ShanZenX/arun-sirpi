import React from "react";
import Title from "../Text/Title";
import { Video } from "./Video";

const CustomerVideoReviews = () => {
  const videos = [
    { id: 1, src: "cus-r1.mp4", title: "Customer Review 1" },
    { id: 2, src: "cus-r2.mp4", title: "Customer Review 2" },
    { id: 3, src: "vid3.mp4", title: "Customer Review 3" },
  ];
  return (
    <div className="w-full gap-1 mb-10 flex flex-wrap justify-content-around">
      <Title
        title="Customer Video Reviews"
        miniTitle="Explore our collection of customer video reviews"
      />
      <div className="w-full gap-1 mb-10 flex flex-wrap justify-content-around">
        {videos.map((video) => (
          <div className="md:w-[24%] w-3/4" key={video.id}>
            <Video key={video.id} src={video.src} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerVideoReviews;
