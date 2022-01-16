import React from "react";
import classes from "./styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={classes.line}></div>
      <div className={classes.box}>
        <h1>Question stack</h1>
      </div>
    </>
  );
};

export default Navbar;
