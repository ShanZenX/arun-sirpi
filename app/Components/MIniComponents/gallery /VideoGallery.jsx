import React, { useState } from "react";
import { Video } from "../Video";
import Title from "../../Text/Title";

const VideoGallery = () => {
    const videoGroups = [
        ["vid1.mp4", "vid2.mp4", "vid7.mp4", "vid5.mp4"],
        ["vid4.mp4", "vid6.mp4", "vid3.mp4", "vid8.mp4"],
    ];

    const [visibleGroups, setVisibleGroups] = useState(1);

    const handleShowMore = () => {
        setVisibleGroups((prev) => Math.min(prev + 1, videoGroups.length));
    };

    return (
        <div className=" w-full  flex flex-col items-center justify-center">
            <Title 
                title="Video Gallery" 
                miniTitle="Explore our collection of videos." 
            />
            {videoGroups.slice(0, visibleGroups).map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className="w-full gap-1 mb-10 flex flex-wrap justify-content-around"
                >
                    {group.map((videoSrc, index) => (
                        <div key={index} className="md:w-[24%] w-3/4">
                            <Video src={videoSrc} />
                        </div>
                    ))}
                </div>
            ))}
            {visibleGroups < videoGroups.length && (
                <button
                    onClick={handleShowMore}
                    className=" mb-10 px-4 py-2 bg-black text-white rounded"
                >
                    Show More
                </button>
            )}
        </div>
    );
};

export default VideoGallery;