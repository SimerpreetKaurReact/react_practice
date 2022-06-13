import React from "react";
import classes from "./Card.module.css";
function Card(props) {
  return <div className={classes["App-header"]}>{props.children}</div>;
}

export default Card;
