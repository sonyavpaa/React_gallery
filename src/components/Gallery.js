import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import SingleImg from "./SingleImg";

const Gallery = (props) => {
  let list = props.list;

  // toggles the view of a single image in a list
  const listClickHandler = (e) => {
    // console.log(e.currentTarget);
    if (e.currentTarget.nextElementSibling.className === "activeImg")
      e.currentTarget.nextElementSibling.className = "nonActiveImg";
    else e.currentTarget.nextElementSibling.className = "activeImg";
  };

  // closes the view of a single image that is active
  const viewClickHandler = (e) => {
    // console.log(e.currentTarget.className);
    e.currentTarget.className = "nonActiveImg";
  };

  return (
    <div className="frameContainer body">
      <div className="leftContainer">
        <div className="h1Container">
          <h1>SONJA VAINIONPÄÄ</h1>
        </div>
        <div className="info">
          <p>sonja.vpaa@gmail.com</p>
        </div>
      </div>
      <div className="rightContainer">
        <div className="image-grid galleryContainer">
          {list.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div onClick={(e) => listClickHandler(e)}>
                  <AdvancedImage key={item.img.publicID} cldImg={item.img} />
                </div>

                <SingleImg
                  active="nonActiveImg"
                  onClick={(e) => viewClickHandler(e)}
                  img={item.img}
                  desc={item.desc}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
