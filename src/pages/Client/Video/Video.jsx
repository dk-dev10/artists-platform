import Container from "components/ui/Container/Container";
import PlatformIcon from "components/ui/platformIcon/platformIcon";
import Album from "components/Album/Album";

import Title from "components/ui/title/title";
import cn from "./Video.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(cn);

const Video = () => {
  return (
    <div className={cx("videoPage")}>
      <Container >
        <Title suptext="на канал" center>
          ПОДПИШИСЬ
        </Title>
        <PlatformIcon
          plat={{ name: "youtube", link: "link" }}
          classname={cx("iconCenter")}
        />
      </Container>
      <Container full bgColor marginTB>
        <Title>ОПИСАНИЕ</Title>
        <br />
        <p className={cx("videoPageText")}>
          История о слиянии двух лун. Разные полюса не преграда для тех, у кого
          сердце бьется в одном темпе. Казалось бы, избитая донельзя тема, но
          каждый раз, сталкиваясь с этим в реальной жизни, невольно начинаешь
          верить в чудеса. Ведь каждая сказка, по сути, основана на реальных
          событиях...
        </p>
      </Container>

      <Container marginTB>
        <div className={cx("videoRelatedHeader")}>
          <Title suptext="Связанный релиз">СЛУШАЙ</Title>
          <p>Все <br /> релизы</p>
        </div>
        <Album />
      </Container>
    </div>
  );
};

export default Video;
