import classNames from "classnames/bind";

import cs from "./Album.module.scss";

import zivert from "../../assets/album.jpg";

const cx = classNames.bind(cs);

// eslint-disable-next-line react/prop-types
const Album = ({
  size,
  classname,
  img = zivert,
  title = "Многоточия",
  subtitle = "Сингл, 2020",
}) => {
  return (
    <div className={cx("cpAlbum", `cpAlbum-${size || "large"}`, classname)}>
      <img src={img} alt="album picture" />
      <div className={cx("albumInfo")}>
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default Album;
