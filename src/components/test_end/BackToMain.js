import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.9rem;
  height: 4.4rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px #60ffcd;
  background: linear-gradient(90.66deg, #60ffcd -8.61%, #60f5ff 112.74%);

  &:focus {
    outline: none;
  }

  &:after {
    content: "메인으로 돌아가기";
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a465e;
  }

  @media (max-width: 1089px) {
    width: 25.5rem;
    height: 4.4rem;
    box-shadow: 0 0 9px #60ffcd;
  }

  @media (max-width: 768px) {
    width: 20.6rem;
    height: 3.8rem;
    box-shadow: 0 0 9px #60ffcd;

    &:after {
      content: "메인으로";
      font-size: 1.4rem;
    }
  }
`;

const BackToMain = () => {
  return (
    <>
      <Link to="/">
        <Wrap>
          <BackBtn />
        </Wrap>
      </Link>
    </>
  );
};

export default BackToMain;
