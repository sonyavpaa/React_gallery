import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import "../css/SingleImg.css";

const SingleImage = (props) => {
  return (
    <div className={props.active} onClick={props.onClick}>
      <div className="singleImgWrapper" key={props.key}>
        <AdvancedImage cldImg={props.img} />
        <div className="singleImgTextWrapper">{props.desc}</div>
      </div>
    </div>
  );
};

export default SingleImage;
