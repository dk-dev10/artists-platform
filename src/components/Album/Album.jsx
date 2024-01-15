import classNames from 'classnames/bind';

import cs from './Album.module.scss';

import zivert from '../../assets/album.jpg';

const cx = classNames.bind(cs);

// eslint-disable-next-line react/prop-types
const Album = ({ size }) => {
  return (
    <div className={cx('cpAlbum', `cpAlbum-${size || 'large'}`)}>
      <img src={zivert} alt='album picture' />
      <div className={cx('albumInfo')}>
        <h4>Многоточия</h4>
        <p>Сингл, 2020</p>
      </div>
    </div>
  );
};

export default Album;
