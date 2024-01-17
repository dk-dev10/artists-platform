import classNames from "classnames/bind";
// import ms from 'styles/main.module.scss';

import Footer from "components/Footer/Footer";
// import Artist from "../Artist/Artist";
// import Release from "../Release/Release";
// import ReleaseList from "client/Release/ReleaseList";
// import VideoList from "client/Video/VideoList";
// import Video from "client/Video/Video";
// import ConcertList from "client/Concerts/ConcertList";
// import Concert from "client/Concerts/Concert";
import Contacts from "client/Contacts/Contacts";

import cs from "./Main.module.scss";
const cx = classNames.bind(cs);

const Main = () => {
  return (
    <main className={cx("main")}>
      {/* <Artist /> */}
      {/* <Release /> */}
      {/* <ReleaseList /> */}
      {/* <VideoList /> */}
      {/* <Video /> */}
      {/* <ConcertList /> */}
      {/* <Concert /> */}
      <Contacts />
      <Footer />
    </main>
  );
};

export default Main;
