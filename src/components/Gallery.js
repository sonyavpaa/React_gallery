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
    e.currentTarget.className = "nonActiveImg";
  };

  return (
    <div className="image-grid galleryContainer">
      {list.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              onClick={(e) => listClickHandler(e)}
              style={{ maxWidth: "70vw" }}
            >
              <AdvancedImage
                key={item?.img[0].publicID}
                cldImg={item?.img[0]}
              />
            </div>

            <SingleImg
              active="nonActiveImg"
              onClick={(e) => viewClickHandler(e)}
              imgs={item.img}
              desc={item.desc}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Gallery;
