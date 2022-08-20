import "./css/App.css";
import React from "react";
import Gallery from "./components/Gallery";

import { cldArr } from "./images";

const App = () => {
  return <Gallery list={cldArr} />;
};

export default App;
