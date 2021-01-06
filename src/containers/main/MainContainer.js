import Background from "../../components/main/Main";
import CategoryWrapperContainer from "./CategoryWrapperContainer";

const MainContainer = (match) => {
  return (
    <Background>
      <CategoryWrapperContainer match={match} />
    </Background>
  );
};

export default MainContainer;
