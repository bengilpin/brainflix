import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video'
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import CommentsRender from './components/CommentsRender/CommentsRender';
import Main from './components/Main/Main';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    </>
  );
}

export default App;
