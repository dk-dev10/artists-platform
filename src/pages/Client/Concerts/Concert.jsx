import Slider from "components/Slider/Slider";
import Container from "components/ui/Container/Container";
import Title from "components/ui/Title/Title";

import classNames from "classnames/bind";
import cn from "./Concert.module.scss";

const cx = classNames.bind(cn);

const Concert = () => {
  return (
    <div className={cx("concertItem")}>
      <Container marginTB full bgColor>
        <Title>ПРЕСС-РЕЛИЗ</Title>

        <br />
        <p>
          Юлия Zivert — сверхновая звезда отечественной музыки и лейбла «Первое
          музыкальное издательство». Молодая, яркая, смелая, эта девушка
          стремительно изменила жизнь, посвятив себя музыке, и вместе с тем
          завоевала любовь тысяч поклонников.
          <br />
          <br />
          Популярность пришла к Zivert после выхода дебютного мини-альбома,
          получившего лаконичное и жизнеутверждающие название «Сияй». EP,
          наполненный простым вечным смыслом в сочетании с сочными современными
          битами, пронизан атмосферой конца 80-х и началом 90-х годов.
        </p>
      </Container>
      <Container marginTB>
        <Slider video />
      </Container>
      <Container marginTB>
        <Slider />
      </Container>
    </div>
  );
};

export default Concert;
