import classNames from "classnames/bind";

import Artist from "../../assets/footer/artist.svg?react";
import Concert from "../../assets/footer/concerts.svg?react";
import Funbase from "../../assets/footer/funbase.svg?react";
import Release from "../../assets/footer/release.svg?react";
import Video from "../../assets/footer/video.svg?react";

import cn from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(cn);

const Footer = () => {
  const footerIcons = [
    {
      to: "/release",
      icon: <Release />,
    },
    {
      to: "/video",
      icon: <Video />,
    },
    {
      to: "/artist",
      icon: <Artist />,
    },
    {
      to: "/contacts",
      icon: <Funbase />,
    },
    {
      to: "/concert",
      icon: <Concert />,
    },
  ];

  return (
    <nav className={cx("bottomNav")}>
      {footerIcons.map(({ to, icon }) => (
        <NavLink
          key={icon + to}
          to={to}
          className={({ isActive }) =>
            cx("BottomNavLink", isActive && "active")
          }
        >
          {icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default Footer;
