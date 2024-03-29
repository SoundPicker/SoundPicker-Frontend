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

  animation: fadeIn 900ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1089px) {
    height: 1.8rem;
  }

  @media (max-width: 768px) {
    height: 1.4rem;
  }

  @media (max-width: 503px) {
    height: 2.2rem;
    align-items: center;
  }
`;

const Title = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 503px) {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 2.5rem;
  }
`;

const TestTitle = ({ title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
    </Wrap>
  );
};

export default TestTitle;
