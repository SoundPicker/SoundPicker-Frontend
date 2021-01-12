import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  height: 1.6rem;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1100ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 503px) {
    height: 2.5rem;
    align-items: center;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 503px) {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const ThankYouText = () => {
  return (
    <Wrap>
      <Text>모든 문제가 끝났습니다. 수고하셨습니다 :&#41;</Text>
    </Wrap>
  );
};

export default ThankYouText;
