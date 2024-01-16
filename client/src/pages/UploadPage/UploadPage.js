import Header from "../../components/Header/Header";
import "./UploadPage.scss";
import publishIcon from "../../assets/images/Icons/publish.svg";
import axios from "axios";
import { useState } from "react";
import thumbNail from "../../assets/images/Images/image1.jpeg";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePublishClick = async () => {
    try {
      const titleInput = document.querySelector(
        ".upload-page__title-container--input"
      );
      const descriptionInput = document.querySelector(
        ".upload-page__description-container--input"
      );

      const title = titleInput.value;
      const description = descriptionInput.value;

      if (!title || !description) {
        console.error("Title and description are required.");
        return;
      }

      const response = await axios.post("http://localhost:8080/videos", {
        title,
        description,
      });

      console.log("Video uploaded successfully:", response.data);

      titleInput.value = "";
      descriptionInput.value = "";
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="upload-page">
        <h1 className="upload-page__h1">Upload Video</h1>
        <div className="desktop_container">
          <div className="desktop_container--right-side">
            <div className="upload-page__title-container">
              <h3 className="upload-page__title-container--h3">
                TITLE YOUR VIDEO
              </h3>
              <input
                className="upload-page__title-container--input"
                placeholder="Add a title to your video"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="upload-page__description-container">
              <h3 className="upload-page__description-container--h3">
                ADD A VIDEO DESCRIPTION
              </h3>
              <input
                className="upload-page__description-container--input"
                placeholder="Add a description to your video"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
        </div>
        <div className="upload-page__button-container">
          <img
            className="upload-page__button-container--icon"
            src={publishIcon}
            alt="Publish Icon"
          />
          <button
            className="upload-page__button-container--button"
            onClick={handlePublishClick}
          >
            PUBLISH
          </button>
          <button className="upload-page__cancel-button">CANCEL</button>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
