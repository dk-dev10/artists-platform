import classNames from "classnames/bind";
import cn from "./title.module.scss";
const cx = classNames.bind(cn);

const Title = ({ children, suptext, center }) => {
  return (
    <div className={cx("title", center && "center")}>
      <h2>{children}</h2>
      {suptext && <span>{suptext}</span>}
    </div>
  );
};

export default Title;
