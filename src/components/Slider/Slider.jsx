import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Album from "../Album/Album";
import Video from "../Video/Video";

import arrow from "assets/arrow.svg";

import "swiper/css";
import cs from "./Slider.module.scss";

const cx = classNames.bind(cs);

const Slider = ({ video }) => {
  const [, setInit] = useState();
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  const sliderElems = Array(9);
  if (video) {
    sliderElems.fill(<Video size="medium" />);
  } else {
    sliderElems.fill(<Album size="small" />);
  }

  return (
    <div className={cx("slider")}>
      <div className={cx("sliderTop")}>
        <h2 className={cx("sliderTopTitle")}>ПОПУЛЯРНОЕ</h2>
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
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={{
          prevEl: prevEl.current,
          nextEl: nextEl.current,
          disabledClass: cx("navigationDisabled"),
        }}
        modules={[Navigation]}
        draggable
        className={cx("mySwiper")}
        onInit={() => setInit(true)}
      >
        {sliderElems.map((slide, i) => (
          <SwiperSlide key={i * i} className={cx("swipeSlide")}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
