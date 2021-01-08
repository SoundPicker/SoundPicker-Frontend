import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "../../components/test_end/TestEnd";
import TestEnd from "../../components/test_end/TestEnd";
import { useHistory, matchPath } from "react-router-dom";

const TestEndContainer = ({ match }) => {
  const history = useHistory();
  const parentMatch = matchPath(history.location.pathname, {
    path: "/test/:id",
  });
  console.log(parentMatch);
  console.log(parentMatch.params.id);

  const [recommend, setRecommend] = useState({
    status: "idle",
    item: null,
  });

  const [title, setTitle] = useState({
    status: "idle",
    item: null,
  });

  const url = "http://3.35.187.65:3000";

  const getRecommendAPI = async () => {
    // id 값 추가하기
    const { data } = await axios.get(`${url}${history.location.pathname}`);
    try {
      console.log("[SUCCESS] GET RECOMMENDATION", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET RECOMMENDATION");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getRecommendAPI();
      try {
        setRecommend({
          status: "pending",
          item: null,
        });
        setRecommend({
          status: "resolved",
          item: data,
        });
      } catch (e) {
        setRecommend({
          status: "rejected",
          item: null,
        });
      }
    })();
  }, []);

  const getTitleAPI = async (id) => {
    // id 값 추가하기
    const { data } = await axios.get(`${url}/test/${id}`);
    try {
      console.log("[SUCCESS] GET TITLE", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET TITLE");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getTitleAPI(parentMatch.params.id);
      try {
        setTitle({
          status: "pending",
          item: null,
        });
        setTitle({
          status: "resolved",
          item: data,
        });
      } catch (e) {
        setTitle({
          status: "rejected",
          item: null,
        });
      }
    })();
  }, [parentMatch.params.id]);

  /*
  switch (recommend.status && title.status) {
    case "idle":
      return <>idle</>;
    case "rejected":
      return <>Error</>;
    case "pending":
      return <>pending</>;
    case "resolved":
    default:
      return <TestEnd recommendList={recommend.item.data} title={title.item} />;
  } */

  if (recommend.status === "idle" || title.status === "idle") {
    return <>idle</>;
  } else if (recommend.status === "rejected" || title.status === "rejected") {
    return <>Error</>;
  } else if (recommend.status === "pending" || title.status === "pending") {
    return <>pending</>;
  } else if (recommend.status === "resolved" && title.status === "resolved") {
    return <TestEnd recommendList={recommend.item.data} title={title.item} />;
  }
};

export default TestEndContainer;
