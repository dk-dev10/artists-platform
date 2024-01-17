import Container from "components/ui/container/container";
import Slider from "components/Slider/Slider";

import classNames from "classnames/bind";
import cn from "./Release.module.scss";
const cx = classNames.bind(cn);

import Album from "components/Album/Album";
import Title from "components/ui/title/title";
import { useState } from "react";

const ReleaseList = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className={cx("releaseList")}>
      <Container full marginTB>
        <Slider album />
      </Container>
      <Container marginTB>
        <div className={cx("releaseListHeader")}>
          <Title>ВСЕ РЕЛИЗЫ</Title>
          <button
            onClick={() => setFilter((f) => !f)}
            className={cx("btnFilter", filter && "btnFilter-active")}
          >
            <hr />
          </button>
        </div>
        <div className={cx("releaseListAlbums")}>
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
          <Album size="medium" classname={cx("releaseAlbumItem")} />
        </div>
      </Container>
    </div>
  );
};

export default ReleaseList;
