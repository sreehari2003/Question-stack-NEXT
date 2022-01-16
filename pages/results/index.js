import React from "react";
import classes from "../../styles/results.module.scss";
import Loading from "../../components/Loading";
import Answer from "../../components/Answer";
const Results = ({ data }) => {
  if (!data) {
    return <Loading />;
  }
  const title = "Top Questions";
  return <Answer data={data} title={title} />;
};

export default Results;
export const getStaticProps = async () => {
  let data;
  try {
    const res = await fetch(
      "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=&site=stackoverflow&filter=!-nt6H9OZ4WW*msaSa)YvngdWhKQ).R9VfXkayFbhnB61(g5UUJbH7f"
    );
    data = await res.json();
    if (!res.ok) throw new Error();
  } catch (e) {
    console.log(e);
  }
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
