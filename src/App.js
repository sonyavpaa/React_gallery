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
          <Route
            path="/turunpa"
            element={
              <Project
                video={projectArr[1].video}
                header={projectArr[1].header}
                p={projectArr[1].p}
              />
            }
          />
          <Route
            path="/suomikuvia"
            element={
              <Project
                iframe={projectArr[2].iframe}
                header={projectArr[2].header}
                p={projectArr[2].p}
              />
            }
          />
          <Route
            path="/kammari"
            element={
              <Project
                img={projectArr[3].img}
                header={projectArr[3].header}
                p={projectArr[3].p}
              />
            }
          />
          <Route
            path="/eden"
            element={
              <Project
                img={projectArr[4].img}
                header={projectArr[4].header}
                p={projectArr[4].p}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
