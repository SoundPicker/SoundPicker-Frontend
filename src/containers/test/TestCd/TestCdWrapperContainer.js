import React, { useEffect, useState } from "react";
import TestCd from "../../../components/test/testcd/TestCd";
import axios from "axios";
import QuizLoading from "../../../components/loading/QuizLoading";
const TestCdWrapperContainer = ({ match }) => {
  //레코드 데이터 정의
  const [quiz, setQuiz] = useState({
    status: "idle",
    item: null,
  });

  const url = "https://soundpicker.ga";

  const getQuizApi = async (id) => {
    const { data } = await axios.get(`${url}/test/${id}`);
    try {
      return data;
    } catch (e) {}
  };

  useEffect(() => {
    (async () => {
      const data = await getQuizApi(match.params.id);
      try {
        setQuiz({
          status: "pending",
          item: null,
        });
        setQuiz({
          status: "resolved",
          item: data,
        });
      } catch (e) {
        setQuiz({
          status: "rejected",
          item: null,
        });
      }
    })();
  }, [match.params.id]);

  switch (quiz.status) {
    case "idle":
      return <QuizLoading />;
    case "rejected":
      return <>Error</>;
    case "pending":
      return <QuizLoading />;
    case "resolved":
    default:
      return (
        <div>
          <TestCd match={match} newList={quiz.item.data} />
        </div>
      );
  }
};

export default TestCdWrapperContainer;
