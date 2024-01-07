import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/VideoPage/VideoPage";
import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import CommentsRender from "./components/CommentsRender/CommentsRender";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/upload"></Route>
          <Route path="/:videoId" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
