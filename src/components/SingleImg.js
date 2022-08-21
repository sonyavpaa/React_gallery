import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import "../css/SingleImg.css";
import {
  // BrowserView,
  // MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const SingleImage = (props) => {
  if (isBrowser) {
    return (
      <div className={props.active} onClick={props.onClick}>
        <div className="imagesWrapper">
          {props.imgs.map((singleImg, index) => {
            return (
              <div className="singleImgWrapper" key={index}>
                <AdvancedImage cldImg={singleImg} />
              </div>
            );
          })}
        </div>
        <div className="singleImgTextWrapper">{props.desc}</div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={props.active} onClick={props.onClick}>
        <div className="singleImgWrapperMobile" key={props.key}>
          <div className="singleImgTextWrapperMobile">{props.desc}</div>
        </div>
      </div>
    );
  }
};

export default SingleImage;
