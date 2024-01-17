import apple from "assets/music-platform/apple.svg";
import boom from "assets/music-platform/boom.svg";
import deezer from "assets/music-platform/deezer.svg";
import itunes from "assets/music-platform/itunes.svg";
import spotify from "assets/music-platform/spotify.svg";
import tiktok from "assets/music-platform/tiktok.svg";
import vk from "assets/music-platform/vk.svg";
import yamusic from "assets/music-platform/yamusic.svg";
import youtube from "assets/music-platform/youtube.svg";

import classNames from "classnames/bind";
import cn from "./platformIcon.module.scss";
const cx = classNames.bind(cn);

const PlatformIcon = ({ plat, classname }) => {
  const platformsFilter = [
    apple,
    boom,
    deezer,
    itunes,
    spotify,
    tiktok,
    vk,
    yamusic,
    youtube,
  ].filter((p) => p.includes(plat.name));

  return (
    <div className={cx("platformIcon", classname)}>
      <img src={platformsFilter[0]} alt="" />
    </div>
  );
};

export default PlatformIcon;
