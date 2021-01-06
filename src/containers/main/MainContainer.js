import React, { useState, useEffect } from "react";
import Background from "../../components/main/Main";
import axios from "axios";

const MainContainer = ({ match }) => {
  const [category, setCategory] = useState({
    status: "idle",
    item: null,
  });

  const url = "http://3.35.187.65:3000";

  // categoryList
  const getCategoryAPI = async () => {
    const { data } = await axios.get(`${url}/main/`);
    try {
      console.log("[SUCCESS] GET CATEGORY", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET CATEGORY");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getCategoryAPI();
      try {
        setCategory({
          status: "pending",
          item: null,
        });
        setCategory({
          status: "resolved",
          item: data,
        });
      } catch (e) {
        setCategory({
          status: "rejected",
          item: null,
        });
      }
    })();
  }, []);

  switch (category.status) {
    case "idle":
      return <>idle</>;
    case "rejected":
      return <>Error</>;
    case "pending":
      return <>pending</>;
    case "resolved":
    default:
      return <Background categoryList={category.item.data.categories} />;
  }
};

export default MainContainer;
