import React from "react";
import "./Description.scss";
import views from "../../assets/images/Icons/views.svg";
import likes from "../../assets/images/Icons/likes.svg";
import { format } from "date-fns";

function Description({ selectedVideoId }) {
  const formattedDate = format(new Date(selectedVideoId.timestamp), "MM/dd/yyyy");
  if (!selectedVideoId) {
    return <p>No content to load</p>;
  }
  return (
    <>
      <div className="description">
        <h1 className="description__title">{selectedVideoId.title}</h1>
        <div className="description__container">
          <div className="description__container--col1">
            <h2>By {selectedVideoId.channel}</h2>
            <h3>{formattedDate}</h3>
          </div>
          <div className="description__container--col2">
            <div className="description__container--col2__views-container">
              <img src={views}></img>
              <h3>{selectedVideoId.views}</h3>
            </div>
            <div className="description__container--col2__likes-container">
              <img src={likes}></img>
              <h3>{selectedVideoId.likes}</h3>
            </div>
          </div>
        </div>
        <p>{selectedVideoId.description}</p>
        <p className="boldy">{selectedVideoId.comments.length} comments</p>
      </div>
    </>
  );
}

export default Description;
