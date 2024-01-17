import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import arrow from "assets/arrow.svg";

// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

import classNames from "classnames/bind";
import cn from "./Slider.module.scss";
import Title from "../ui/title/title";
import PlatformIcon from "../ui/platformIcon/platformIcon";

const cx = classNames.bind(cn);

const platforms = [
  { name: "apple", link: "link" },
  { name: "boom", link: "link" },
  { name: "deezer", link: "link" },
  { name: "itunes", link: "link" },
  { name: "spotify", link: "link" },
  { name: "tiktok", link: "link" },
  { name: "vk", link: "link" },
  { name: "yamusic", link: "" },
  { name: "youtube", link: "link" },
].filter((p) => !!p.link);

export default function SliderPlatforms() {
  const [, setInit] = useState();
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  return (
    <div className={cx("slider")}>
      <div className={cx("sliderTop")}>
        <Title>ПОПУЛЯРНОЕ</Title>
        {/* <h2 className={cx("sliderTopTitle")}>ПОПУЛЯРНОЕ</h2> */}
        <div className={cx("sliderTopBtn")}>
          <button className={cx("sliderPrevBtn")} ref={prevEl}>
            <img src={arrow} />
          </button>
          <button ref={nextEl}>
            <img src={arrow} />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={2.3}
        grid={{
          rows: 3,
          fill: "row",
        }}
        spaceBetween={21}
        modules={[Grid, Navigation]}
        navigation={{
          prevEl: prevEl.current,
          nextEl: nextEl.current,
          disabledClass: cx("navigationDisabled"),
        }}
        className={cx("mySwiper", "mySwiper-padding")}
        onInit={() => setInit(true)}
      >
        {platforms.map((plat) => (
          <SwiperSlide key={plat.link + plat.name}>
            <PlatformIcon plat={plat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
