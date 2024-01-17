import Container from "components/ui/Container/Container";
import Title from "components/ui/Title/Title";

import classNames from "classnames/bind";
import cn from "./Contacts.module.scss";

const cx = classNames.bind(cn);

const cntcts = [
  {
    prof: "Концерты",
    name: "Kuba Buba",
    phone: "+7 (900) 111-22-33",
    email: "petr@artist.ru",
  },
  {
    prof: "PR/ интервью",
    name: "Kuba Duba",
    phone: "+7 (900) 111-22-33",
    email: "petr@artist.ru",
  },
  {
    prof: "Реклама/ сотрудничество",
    name: "Kuba Muba",
    phone: "+7 (900) 111-22-33",
    email: "petr@artist.ru",
  },
];

const Contacts = () => {
  return (
    <div className={cx("contacts")}>
      <Container marginTB>
        <Title>КОНТАКТЫ</Title>

        {cntcts.map(({ prof, name, phone, email }, n) => (
          <div key={email + n} className={cx("contactItem")}>
            <p className={cx("contactProfession")}>{prof}</p>
            <div className={cx("contactInformation")}>
              <h4 className={cx("contactInformationName")}>{name}</h4>
              <p className={cx("contactInformationPhone")}>{phone}</p>
              <p className={cx("contactInformationEmail")}>{email}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Contacts;
