import classNames from "classnames/bind";

import zivertVideo from "assets/zivert-video.jpg";
import play from "assets/play.svg";

import cn from "./Video.module.scss";

const cx = classNames.bind(cn);

const Video = ({ size, classname }) => {
  return (
    // <div className={cx("cpVideoWrapper")}>
    <div className={cx("cpVideo", `cpVideo-${size || "large"}`, classname)}>
      <div className={cx("cpVideoImg")}>
        <img src={zivertVideo} alt="video picture" />
        <img className={cx("videoPlayBtn")} alt="" src={play} />
      </div>
      <div className={cx("videoInfo")}>
        <h4>Многоточия</h4>
        <p>Сингл, 2020</p>
      </div>
    </div>
  );
};

export default Video;
