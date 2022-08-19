import "./App.css";
import React from "react";
import Gallery from "./Gallery";

import { cldArr } from "./images";

const App = () => {
  return <Gallery list={cldArr} />;
};

export default App;
