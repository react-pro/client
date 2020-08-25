import './header.scss';

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <div className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about" className="nav__link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Header;
