import React, { useState, useEffect, useCallback } from "react";
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

  // testList
  const [test, setTest] = useState({
    status: "idle",
    item: null,
  });

  const getTestAPI = async () => {
    const { data } = await axios.get(`${url}/main/`);
    try {
      console.log("[SUCCESS] GET TEST", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET TEST");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getTestAPI();
      try {
        setTest({
          status: "pending",
          item: null,
        });
        setTest({
          status: "resolved",
          item: data,
        });
      } catch (e) {
        setTest({
          status: "rejected",
          item: null,
        });
      }
    })();
  }, []);

  const onClickDisplay = useCallback((id) => {
    const sortId = id;
    console.log("최상위 컴포넌트", sortId);
    (async () => {
      const data = await getSortAPI(sortId);
      console.log(data);
    })();
  });

  // 클릭한 카테고리 id를 받아와서, 해당하는 테스트만 return하는 메소드
  const getSortAPI = async (sortId) => {
    const { data } = await axios.get(`${url}/main`);
    console.log(data);
    let finalData = [];
    data.data.tests.forEach((req) => {
      if (req.Category.id === sortId) {
        finalData.push(req);
      }
    });
    try {
      console.log("[SUCCESS] GET SORT", finalData);
      return finalData;
    } catch (e) {
      console.log("[FAIL] GET SORT");
    }
  };

  switch (category.status) {
    case "idle":
      return <>idle</>;
    case "rejected":
      return <>Error</>;
    case "pending":
      return <>pending</>;
    case "resolved":
    default:
      return (
        <Background
          categoryList={category.item.data.categories}
          testList={category.item.data.tests}
          onClickDisplay={onClickDisplay}
        />
      );
  }
};

export default MainContainer;
