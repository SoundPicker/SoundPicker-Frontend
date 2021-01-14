import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  height: 2rem;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1300ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1089px) {
    height: 1.6rem;
  }

  @media (max-width: 768px) {
    height: 1.2rem;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  color: #ffffff;

  @media (max-width: 1089px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 503px) {
    font-size: 1.2rem;
  }
`;

const RecommendText = () => {
  return (
    <Wrap>
      <Title>이런 테스트들은 어떤가요?</Title>
    </Wrap>
  );
};

export default RecommendText;
