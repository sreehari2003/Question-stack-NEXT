import React from "react";
import classes from "../styles/index.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const Index = () => {
  const input = React.createRef();
  const router = useRouter();
  const formSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;
    if (value.length < 1) {
      router.push("/results");
    } else {
      router.push("/results/" + value);
    }
  };
  return (
    <div className={classes.index}>
      <div className={classes["search-box"]}>
        <div className={classes.frame}>
          <iframe
            src="https://embed.lottiefiles.com/animation/16417"
            title="stack overflow"
          ></iframe>
        </div>
        <div className={classes.boxx}>
          <form onSubmit={formSubmit}>
            <TextField
              inputRef={input}
              id="outlined-basic"
              label="enter the question"
              variant="outlined"
            />
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
