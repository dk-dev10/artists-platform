import classNames from "classnames/bind";
// import ms from 'styles/main.module.scss';

import Footer from "components/Footer/Footer";

import cs from "./Main.module.scss";
import { Outlet } from "react-router-dom";
const cx = classNames.bind(cs);

const Main = () => {
  return (
    <main className={cx("main")}>
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
