import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Questions from "../../components/Questions";
import Loading from "../../components/Loading";

const User = () => {
  const [dt, setDt] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const query = router.query.id;
  const title = "Questions";
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=${query}&site=stackoverflow&filter=!-nt6H9OZ4WW*msaSa)YvngdWhKQ).R9VfXkayFbhnB61(g5UUJbH7f`
      );
      const data = await res.json();
      setDt(data);
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <Loading />;
  }
  return <Questions title={title} data={dt} />;
};

export default User;
