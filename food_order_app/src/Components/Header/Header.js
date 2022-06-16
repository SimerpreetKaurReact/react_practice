import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import main_img from "../../utils/meals.jpg";
function Header() {
  return (
    <>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img alt="foodApp" src={main_img} />
      </div>
    </>
  );
}

export default Header;
