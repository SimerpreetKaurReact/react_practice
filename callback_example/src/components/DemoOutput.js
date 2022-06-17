import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  console.log("log inside DemoOutput");
  return <MyParagraph> {props.show ? "this is on toggle" : ""}</MyParagraph>;
}

export default React.memo(DemoOutput);
