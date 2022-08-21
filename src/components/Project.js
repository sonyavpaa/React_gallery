import { AdvancedVideo } from "@cloudinary/react";
import "../css/Project.css";
import { BrowserView, MobileView } from "react-device-detect";

const Project = (props) => {
  return (
    <div>
      <div className="videoContainer">
        <BrowserView>
          <AdvancedVideo
            className="videoBrowser"
            cldVid={props.video}
            controls
          ></AdvancedVideo>
          <p>{props.videoTxt}</p>
        </BrowserView>
        <MobileView>
          <AdvancedVideo
            className="videoMobile"
            cldVid={props.video}
            controls
          ></AdvancedVideo>
        </MobileView>
      </div>
      <BrowserView>
        <div className="textContainerBrowser">
          <h1 className="projecth1Browser">{props.header}</h1>
          <div className="projectPContainerBrowser">{props.p}</div>
        </div>
      </BrowserView>
      <MobileView>
        <h1 className="projecth1Mobile">{props.header}</h1>
        <div className="projectPContainerMobile">{props.p}</div>
      </MobileView>
    </div>
  );
};

export default Project;
