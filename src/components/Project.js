import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import "../css/Project.css";
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";

const Project = (props) => {
  if (props.iframe) {
    return (
      <div>
        <div className="videoContainer">
          <BrowserView>
            {props.iframe.browser}
            <p>{props.videoTxt}</p>
          </BrowserView>
          <MobileView>{props.iframe.mobile}</MobileView>
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
        <Link className="arrowBack" to={"/cv"}>
          {" "}
          &#8592;{" "}
        </Link>
      </div>
    );
  }
  if (props.video) {
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
        <Link className="arrowBack" to={"/cv"}>
          {" "}
          &#8592;{" "}
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="videoContainer">
        <BrowserView>
          <AdvancedImage className="imgBrowser" cldImg={props.img} />
        </BrowserView>
        <MobileView>
          <AdvancedImage className="imgMobile" cldImg={props.img} />
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
      <Link className="arrowBack" to={"/cv"}>
        {" "}
        &#8592;{" "}
      </Link>
    </div>
  );
};

export default Project;
