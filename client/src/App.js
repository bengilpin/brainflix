import React from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
          <Route path="/:videoId" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
