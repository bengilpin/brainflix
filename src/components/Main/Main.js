import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Main.scss";
import Header from "../Header/Header";
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
    return <p>waiting for videos to load</p>;
  }

  const selectedVideoId = videoId || videos[0].id;

  const filteredVideos = videos.filter((video) => {
    return selectedVideoId !== video.id;
  });
  return (
    <>
      <Header />

      <SelectedVideo
        selectedVideoId={selectedVideoId}
        filteredVideos={filteredVideos}
      />
    </>
  );
}

export default Main;
