import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Main.scss";
import videoDetails from "../../data/video-details.json";
import Video from "../VideoPage/VideoPage";
import CommentsRender from "../CommentsRender/CommentsRender";
import Description from "../Description/Description";
import Header from "../Header/Header";
import NextVideos from "../NextVideos/NextVideos";
import { getMoviesEndpoint } from "../../utils/api-utils";
import SelectedVideo from "../SelectedVideo/SelectedVideo";

function Main() {
  const [videos, setVideos] = useState(null);
  const { videoId } = useParams();

  const getVideos = async () => {
    try {
      let response = await axios.get(getMoviesEndpoint());
      setVideos(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (videos === null) {

    return <p>waiting for videos to load</p>
  }

  const selectedVideoId = videoId || videos[0].id;

  const filteredVideos = videos.filter((video) => {
    return selectedVideoId !== video.id;
  });
  return (
    <>
      <Header />
      <div className="main-container">
        <SelectedVideo selectedVideoId={selectedVideoId} />
        <NextVideos filteredVideos={filteredVideos} />
      </div>
    </>
  );
}

export default Main;
