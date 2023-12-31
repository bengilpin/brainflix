import React from "react";
import "./NextVideos.scss";

function NextVideos({video, onSelectVideo}) {
    const handleVideoClick = () => {
        onSelectVideo(video);
    }

    return (
        <>
        
        <div onClick={handleVideoClick} className="next-video">
            <img src={video.image} className="next-video__image"></img>
            <div className="next-video__content">
                <h2>{video.title}</h2>
                <h3>{video.channel}</h3>
            </div>
        </div>
        </>
    )
}

export default NextVideos;