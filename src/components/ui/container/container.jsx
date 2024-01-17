import classNames from "classnames/bind";

import cn from "./container.module.scss";

const cx = classNames.bind(cn);

const Container = ({ full, children, marginTB, bgColor, classname }) => {
  return (
    <div
      className={cx(
        "container",
        full && "containerFull",
        marginTB && "marginTB",
        bgColor && "bgColor",
        classname,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
