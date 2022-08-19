import { AdvancedImage } from "@cloudinary/react";

const Gallery = (props) => {
  let list = props.list;

  return (
    <div className="frameContainer body">
      <div className="leftContainer">
        <div className="h1Container">
          <h1>SONJA VAINIONPÄÄ</h1>
        </div>
      </div>
      <div className="rightContainer">
        <div className="image-grid galleryContainer">
          {list.map((item, index) => {
            return (
              <div key={index}>
                <AdvancedImage key={item.img.publicID} cldImg={item.img} />
                <span>{item.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
