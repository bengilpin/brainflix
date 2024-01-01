import React from "react";
import "./Description.scss";
import views from "../../assets/images/Icons/views.svg";
import likes from "../../assets/images/Icons/likes.svg";
import { format } from "date-fns";

function Description({ selectedVideo }) {
  const formattedDate = format(new Date(selectedVideo.timestamp), "MM/dd/yyyy");
  if (!selectedVideo) {
    return <p>No content to load</p>;
  }
  return (
    <>
      <div className="description">
        <h1 className="description__title">{selectedVideo.title}</h1>
        <div className="description__container">
          <div className="description__container--col1">
            <h2>By {selectedVideo.channel}</h2>
            <h3>{formattedDate}</h3>
          </div>
          <div className="description__container--col2">
            <div className="description__container--col2__views-container">
              <img src={views}></img>
              <h3>{selectedVideo.views}</h3>
            </div>
            <div className="description__container--col2__likes-container">
              <img src={likes}></img>
              <h3>{selectedVideo.likes}</h3>
            </div>
          </div>
        </div>
        <p>{selectedVideo.description}</p>
        <p className="boldy">{selectedVideo.comments.length} comments</p>
      </div>
    </>
  );
}

export default Description;
