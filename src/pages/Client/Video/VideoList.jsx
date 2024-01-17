import { useState } from "react";
import Container from "components/ui/container/container";
import Slider from "components/Slider/Slider";

import Video from "components/Video/Video";
import Title from "components/ui/title/title";

import classNames from "classnames/bind";
import cn from "./Video.module.scss";
const cx = classNames.bind(cn);

const VideoList = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div>
      <div className={cx("videoList")}>
        <Container full marginTB>
          <Slider video />
        </Container>
        <Container marginTB>
          <div className={cx("videoListHeader")}>
            <Title>ВСЕ ВИДЕО</Title>
            <button
              onClick={() => setFilter((f) => !f)}
              className={cx("btnFilter", filter && "btnFilter-active")}
            >
              <hr />
            </button>
          </div>
          <div className={cx("videoListAlbums")}>
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
            <Video size="small" classname={cx("videoAlbumItem")} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default VideoList;
