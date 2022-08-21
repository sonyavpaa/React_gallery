import "./css/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayOut from "./pages/LayOut";
import Gallery from "./components/Gallery";
import Cv from "./components/Cv";
import Project from "./components/Project";

import { cldArr } from "./images";
import { projectArr } from "./images";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Gallery list={cldArr} />} />
          <Route path="/cv" element={<Cv />} />
          <Route
            path="/curators"
            element={
              <Project
                video={projectArr[0].video.img}
                videoTxt={projectArr[0].video.txt}
                header={projectArr[0].header}
                p={projectArr[0].p}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
