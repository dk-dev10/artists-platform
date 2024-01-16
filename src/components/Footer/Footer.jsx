import classNames from "classnames/bind";

import Artist from "../../assets/footer/artist.svg?react";
import Concert from "../../assets/footer/concerts.svg?react";
import Funbase from "../../assets/footer/funbase.svg?react";
import Release from "../../assets/footer/release.svg?react";
import Video from "../../assets/footer/video.svg?react";

import cn from "./Footer.module.scss";

const cx = classNames.bind(cn);

const Footer = () => {
  return (
    <nav className={cx("bottomNav")}>
      <div className={cx("BottomNavLink")}>
        <Release />
      </div>
      <div className={cx("BottomNavLink")}>
        <Video />
      </div>
      <div className={cx("BottomNavLink", "active")}>
        <Artist />
      </div>
      <div className={cx("BottomNavLink")}>
        <Concert />
      </div>
      <div className={cx("BottomNavLink")}>
        <Funbase />
      </div>
    </nav>
  );
};

export default Footer;
