import Header from "../../components/Header/Header";
import "./UploadPage.scss";
import publishIcon from "../../assets/images/Icons/publish.svg";

function UploadPage() {
  return (
    <>
      <Header></Header>
      <div className="upload-page">
        <h1 className="upload-page__h1">Upload Video</h1>
        <div className="desktop_container">
          <div className="upload-page__thumbnail-container">
            <h3 className="upload-page__thumbnail-container--h3">
              VIDEO THUMBNAIL
            </h3>
            <div className="upload-page__thumbnail-container--image">I'm a placeholder for a video thumbnail!!</div>
          </div>
          <div className="desktop_container--right-side">
          <div className="upload-page__title-container">
            <h3 className="upload-page__title-container--h3">
              TITLE YOUR VIDEO
            </h3>
            <input
              className="upload-page__title-container--input"
              placeholder="Add a title to your video"
            ></input>
          </div>
          <div className="upload-page__description-container">
            <h3 className="upload-page__description-container--h3">
              ADD A VIDEO DESCRIPTION
            </h3>
            <input
              className="upload-page__description-container--input"
              placeholder="Add a description to your video"
            ></input>
            </div>
          </div>
        </div>
        <div className="upload-page__button-container">
          <img
            className="upload-page__button-container--icon"
            src={publishIcon}
          ></img>
          <button className="upload-page__button-container--button">
            PUBLISH
          </button>
          <button className="upload-page__cancel-button">CANCEL</button>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
