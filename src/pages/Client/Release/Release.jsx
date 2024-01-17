import Container from "components/ui/container/container";
import Slider from "components/Slider/Slider";
import SliderPlatforms from "components/Slider/SliderPlatforms";

import classNames from "classnames/bind";
import cn from "./Release.module.scss";
const cx = classNames.bind(cn);

const trackList = [
  {
    title: "Безболезненно (Intro)",
    time: "0:39",
  },
  {
    title: "Beverly Hills (Intro)",
    time: "4:13",
  },
  {
    title: "Двусмысленно (Intro) feat M’Dee",
    time: "4:13",
  },
  {
    title: "Fly (Intro)",
    time: "0:39",
  },
  {
    title: "Бродяга–дождь (Intro)",
    time: "4:13",
  },
];

const Release = () => {
  return (
    <div className={cx("release")}>
      <Container full marginTB>
        <SliderPlatforms />
      </Container>
      <Container full bgColor classname={cx("releaseTracksWrapper")}>
        <h2>ТРЕК–ЛИСТ</h2>
        <ol className={cx("releaseTrackList")}>
          {trackList.map((track, i) => (
            <li key={i + track.title}>
              <span>{track.title}</span>
              <span>{track.time}</span>
            </li>
          ))}
        </ol>
      </Container>
      <Container full marginTB>
        <Slider video />
      </Container>
    </div>
  );
};

export default Release;
