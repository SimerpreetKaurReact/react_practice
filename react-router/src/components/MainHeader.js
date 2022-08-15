import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
//link will component will prevent page default fetch and internally render a tag. reducing unnnecarry server call
//navlink will set a active class when that link is active
