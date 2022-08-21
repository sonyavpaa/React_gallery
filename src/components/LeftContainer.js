import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";

import "../css/LeftContainer.css";

const LeftContainer = () => {
  const [togglePath, setTogglePath] = useState("/cv");

  const changePath = () => {
    if (togglePath === "/") setTogglePath("/cv");
    else setTogglePath("/");
  };

  return (
    <div className="leftContainer">
      <div className="h1Container">
        <Link onClick={changePath} to={togglePath}>
          <h1>SONJA VAINIONPÄÄ</h1>
        </Link>
      </div>
      <div className="info">
        <BrowserView>
          <a href="mailto:sonja.vpaa@gmail.com<">
            <p>sonja.vpaa@gmail.com</p>
          </a>
        </BrowserView>
      </div>
    </div>
  );
};

export default LeftContainer;
