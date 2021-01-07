import TestEnd from "../../components/test_end/TestEnd";

import React, { useState, useEffect } from "react";
import axios from "axios";

const TestEndContainer = ({ match }) => {
  const [testTitle, setTestTitle] = useState({
    status: "idle",
    item: null,
  });

  const [recommendList, setRecommendList] = useState({
    status: "idle",
    item: null,
  });

  const url = "http://3.35.187.65:3000";

  // testTitleList
  const getTestTitleAPI = async () => {};

  const getRecommendListAPI = async () => {
    const { data } = await axios.get(`${url}/test/recommendation/`);
    try {
      console.log("[SUCCESS] GET RECOMMENDATION", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET RECOMMENDATION");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getRecommendListAPI();
      try {
        setRecommendList({
          status: "pending",
          item: null,
        });
        setRecommendList({
          status: "resolved",
          item: data,
        });
      } catch (e) {
        setRecommendList({
          status: "rejected",
          item: null,
        });
      }
    })();
  }, []);

  switch (recommendList.status) {
    case "idle":
      return <>idle</>;
    case "rejected":
      return <>Error</>;
    case "pending":
      return <>pending</>;
    case "resolved":
    default:
      return <TestEnd recommendList={recommendList.item.data} />;
  }
};

export default TestEndContainer;
