import classNames from "classnames/bind";
import { Route, Routes, Navigate } from "react-router-dom";

import Artist from "client/Artist/Artist";
import Release from "client/Release/Release";
import ReleaseList from "client/Release/ReleaseList";
import VideoList from "client/Video/VideoList";
import Video from "client/Video/Video";
import ConcertList from "client/Concerts/ConcertList";
import Concert from "client/Concerts/Concert";
import Main from "client/Main/Main";
import Contacts from "client/Contacts/Contacts";
import Header from "components/Header/Header";

import cs from "./App.module.scss";

const cx = classNames.bind(cs);

const App = () => {
  return (
    <div className={cx("app")}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="artist" element={<Artist />} />
          <Route path="release" element={<ReleaseList />}>
            <Route path="artist/:id" element={<Release />} />
          </Route>
          <Route path="video" element={<VideoList />}>
            <Route path=":id" element={<Video />} />
          </Route>
          <Route path="concert" element={<ConcertList />}>
            <Route path=":id" element={<Concert />} />
          </Route>
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route index element={<Navigate to="/artist" replace />} />
      </Routes>
    </div>
  );
};

export default App;
