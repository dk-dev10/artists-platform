import { useState } from "react";
import classNames from "classnames/bind";

import Album from "components/Album/Album";
import Slider from "components/Slider/Slider";
import Container from "components/ui/container/container";
import Video from "components/Video/Video";
import ConcertList from "components/ConcertList/ConcertList";

import arrowDown from "assets/arrow-down.svg";

// import ms from 'styles/main.module.scss';
import cs from "./Main.module.scss";
import Footer from "../../../components/Footer/Footer";

const cx = classNames.bind(cs);

const Main = () => {
  const [aboutText, setAboutText] = useState(false);

  const aboutArtist = `Российская поп-певица. Стала известна в 2017 году с песнями «Чак» и
«Анестезия». Широкую популярность получила в конце 2018 года после
выхода трека «Life». Российская поп-певица. Стала известна в 2017 году с песнями «Чак» и
«Анестезия». Широкую популярность получила в конце 2018 года после
выхода трека «Life».`;

  return (
    <main className={cx("main")}>
      {/* <section className={cx('sectionNew', ms.container)}> */}
      <section className={cx("sectionNew")}>
        <Container marginTB>
          <h3 className={cx("sectionTitle")}>СЛУШАЙ НОВОЕ</h3>
          <br />
          <Album />
        </Container>
        <br />
        <Container full marginTB>
          <Slider />
        </Container>

        <Container full marginTB bgColor>
          <h3 className={cx("sectionTitle")}>ОБ АРТИСТЕ</h3>
          <div className={cx("artistAbout")}>
            <p
              className={cx(
                "artistAboutText",
                aboutText && "artistAboutText-active",
              )}
            >
              {aboutArtist}
            </p>

            <button onClick={() => setAboutText((bool) => !bool)}>
              <span>{aboutText ? "Скрыть" : "Подробнее"}</span>
              <img
                src={arrowDown}
                className={cx(aboutText ? "open" : "close")}
              />
            </button>
          </div>
        </Container>
      </section>
      <Container marginTB>
        <Video />
      </Container>
      <br />
      <Container full marginTB>
        <Slider video />
      </Container>
      <Container full marginTB bgColor>
        <ConcertList />
        <br />
        <button className={cx("concertListBtn")}>
          <p>ВСЕ КОНЦЕРТЫ</p>
        </button>
      </Container>

      <Footer />
    </main>
  );
};

export default Main;
