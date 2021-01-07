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

  const getTitleAPI = async () => {
    // id 값 추가하기
    const { data } = await axios.get(`${url}${parentMatch.url}`);
    try {
      console.log("[SUCCESS] GET TITLE", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET TITLE");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getTitleAPI();
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
  }, []);

  switch (recommend.status) {
    case "idle":
      return <>idle</>;
    case "rejected":
      return <>Error</>;
    case "pending":
      return <>pending</>;
    case "resolved":
    default:
      return <TestEnd recommendList={recommend.item.data} title={title.item} />;
  }
};

export default TestEndContainer;
