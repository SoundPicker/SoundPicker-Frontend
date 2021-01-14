import styled from "styled-components";
import QuizHeader from "../common/QuizHeader";

const Wrap = styled.div`
  width: 100vw;
  height: 9.8rem;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 500ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1089px) {
    height: 8.8rem;
  }
  @media (max-width: 503px) {
    height: 6rem;
  }
`;

// MenuIcon 자리 비워둠
const Header = () => {
  return (
    <Wrap>
      <QuizHeader></QuizHeader>
    </Wrap>
  );
};

export default Header;
