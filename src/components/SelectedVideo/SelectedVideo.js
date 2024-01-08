import Video from "../VideoPage/VideoPage";
import Description from "../Description/Description";
import axios from "axios";
import { useEffect, useState } from "react";
import { getMovieEndpoint } from "../../utils/api-utils";
import CommentsRender from "../CommentsRender/CommentsRender";
import { useParams } from "react-router-dom";
import NextVideos from "../NextVideos/NextVideos";
import "./SelectedVideo.scss";

function SelectedVideo({ selectedVideoId, filteredVideos }) {
  const [video, setVideo] = useState(null);

  const getSelectedVideo = async (videoId) => {
    try {
      let response = await axios.get(getMovieEndpoint(videoId));
      setVideo(response.data);
    } catch (error) {
      console.log("oops: ", error);
    }
  };

  useEffect(() => {
    getSelectedVideo(selectedVideoId);
  }, [selectedVideoId]);

  if (video === null) {
    return <p>still loading the video</p>;
  }

  return (
    <>
      <div className="video-container">
        <video className="video-container__video" poster={video.image} controls>
          Your browser doesn't support the video tag.
        </video>
      </div>
      <div className="video-section">
        <div className="video-section__col-left">
          <Description selectedVideoId={video} />
          <CommentsRender selectedVideoId={video} />
        </div>
        <NextVideos filteredVideos={filteredVideos} />
      </div>
    </>
  );
}

export default SelectedVideo;
