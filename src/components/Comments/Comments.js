import React from "react";
import "./Comments.scss";
import { format } from "date-fns";

function Comments({ comment }) {
  const { name, comment: text, timestamp } = comment;
  const formattedDate = format(new Date(timestamp), "MM/dd/yyyy");

  return (
    <>
      <div className="comment-card">
        <div className="comment-card--image"></div>
        <div className="comment-card__content">
          <div className="comment-card__content--header">
            <h2>{name}</h2>
            <h3>{formattedDate}</h3>
          </div>
          <div className="comment-card__content--comment">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
