import React from "react";
import classes from "./styles/Questions.module.scss";
import { useEffect, useState } from "react";
const Questions = ({ data }) => {
  const [res, setRes] = useState(false);
  useEffect(() => {
    if (window.screen.width < 400) {
      setRes(true);
    }
  }, []);
  return (
    <>
      {data.items.map((el, index) => {
        let tag;
        if (res) {
          tag = el.tags.slice(0, 3);
        } else {
          tag = el.tags;
        }
        return (
          <div className={classes.qnBox} key={index}>
            <div className={classes.title}>
              <a href={el.link}>{el.title}</a>
            </div>
            <div className={classes.tags}>
              <div className={classes.lang}>
                {tag.map((el, index) => (
                  <span key={index}>{el}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Questions;
