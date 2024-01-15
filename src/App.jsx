import classNames from 'classnames/bind';

import cs from './App.module.scss';
import Header from 'components/Header/Header';
import Main from 'client/Main/Main';

const cx = classNames.bind(cs);

const App = () => {
  return (
    <div className={cx('app')}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
