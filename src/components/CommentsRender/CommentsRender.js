import React from "react";
import "./CommentsRender.scss";
import profilePic from "../../assets/images/Images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";
import addCommentIcon from "../../assets/images/Icons/add_comment.svg";

function CommentsRender({ selectedVideo }) {
  const comments = selectedVideo ? selectedVideo.comments : [];

  return (
    <>
      <div className="comment-form">
        <img className="comment-form__profilePic" src={profilePic}></img>
        <div className="comment-form__content">
          <div className="comment-form__content__inner">
            <h2>JOIN THE CONVERSATION</h2>
            <input placeholder="Add a comment..."></input>
          </div>
          <div className="comment-form__content__button-container">
            <img src={addCommentIcon}></img>
            <button>COMMENT</button>
          </div>
        </div>
      </div>
      <div className="comments-container">
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default CommentsRender;
