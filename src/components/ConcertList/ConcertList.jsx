import classNames from "classnames/bind";
import cn from "./ConcertList.module.scss";

const cx = classNames.bind(cn);

const concerts = [
  {
    dateDay: 12,
    arena: "Фетисов-Арена",
    city: "Владивосток",
    dateMonth: "feb",
  },
  {
    dateDay: 13,
    city: "Рязань",
    arena: "Deep",
    dateMonth: "feb",
  },
  {
    dateDay: 21,
    arena: "Rostok Hall",
    city: "Пенза",
    dateMonth: "feb",
  },
  {
    dateDay: 12,
    arena: "Уфа-Арена",
    city: "Уфа",
    dateMonth: "may",
  },
  {
    dateDay: 18,
    arena: "Арена-Металург",
    city: "Магнитогорск",
    dateMonth: "may",
  },
  {
    dateDay: 19,
    arena: "Ледовая арена “Трактоор”",
    city: "Челябинск",
    dateMonth: "feb",
  },
  {
    dateDay: 21,
    arena: "Волга-Спорт Арена",
    city: "Ульянооовск",
    dateMonth: "feb",
  },
];

const ConcertList = () => {
  return (
    <ul>
      {concerts.map((concert, n) => (
        <li key={n} className={cx("concertListItem")}>
          <div className={cx("concertListDate")}>
            <p>{concert.dateDay}</p>
            <span>{concert.dateMonth}</span>
          </div>
          <p className={cx("concertListItemInfo")}>{concert.city}</p>
          <p className={cx("concertListItemInfo")}>{concert.arena}</p>
        </li>
      ))}
    </ul>
  );
};

export default ConcertList;
