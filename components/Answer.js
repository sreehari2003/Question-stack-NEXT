import React from "react";
import classes from "./styles/results.module.scss";
import Questions from "./Questions";

const Answer = ({ data, title }) => {
  return (
    <div className={classes.results}>
      <div className={classes.top}>
        <h2>{title}</h2>
      </div>
      <Questions data={data} />
    </div>
  );
};

export default Answer;
