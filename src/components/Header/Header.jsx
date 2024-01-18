import classNames from "classnames/bind";

import cs from "./Header.module.scss";

import logo from "assets/linktone-black.svg";
import arrow from "assets/arrow.svg";
import zivert from "assets/zivertHeader.png";

import vk from "assets/social/vk.svg";
import facebook from "assets/social/facebook.svg";
import twitter from "assets/social/twitter.svg";
import telegram from "assets/social/telegram.svg";
import whatsapp from "assets/social/whatsapp.svg";
import { Route, Routes } from "react-router-dom";
import Album from "../Album/Album";
import Video from "../Video/Video";

const cx = classNames.bind(cs);

const socialArr = [
  {
    link: "vk",
    logo: vk,
  },
  {
    link: "",
    logo: facebook,
  },
  {
    link: "",
    logo: twitter,
  },
  {
    link: "telegram",
    logo: telegram,
  },
  {
    link: "",
    logo: whatsapp,
  },
];

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("headerTop")}>
        <button className={cx("headerButton")}>
          <hr />
        </button>
        <img src={logo} alt="logo" className={cx("headerLogo")} />
        <button className={cx("headerHistoryButton")}>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className={cx("headerCenter")}>
        {/* <img src={zivert} alt="" /> */}
        <Routes>
          <Route path="/artist" element={<Album img={zivert} title=" " subtitle=" " />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
      <div className={cx("headerBottom")}>
        <p>ПОДПИШИСЬ</p>
        <div className={cx("socialMedias")}>
          {socialArr.map((media) => (
            <a key={`${media.link}_${media.logo}`}>
              <img src={media.logo} alt="" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
