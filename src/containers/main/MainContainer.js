import { useState } from "react";
import Main from "../../components/main/Main";
import Background from "../../components/main/Main";

const MainContainer = () => {
  // container는 useState 및 useEffet나 함수 정의
  const [sibal, setSibal] = useState("ㅗ");

  return <Background />;
};

export default MainContainer;
