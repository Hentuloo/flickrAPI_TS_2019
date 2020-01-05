import React from "react";
import cx from "classnames";
import HeaderImage from "assets/images/sand.jpg";
import "./Header.scss";

export interface HeaderProps {
  title: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <header className={cx(className, "header")}>
      {title && <h1 className="header__headline sr-only">{title}</h1>}
      <img
        className="header__image"
        src={HeaderImage}
        alt="Piasek i kamienie"
      />
    </header>
  );
};

export default Header;
