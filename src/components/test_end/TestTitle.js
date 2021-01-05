import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  height: 1.6rem;
  justify-content: center;

  @media (max-width: 1089px) {
    height: 1.8rem;
  }

  @media (max-width: 768px) {
    height: 1.4rem;
  }
`;

const Title = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const TestTitle = () => {
  return (
    <Wrap>
      <Title>레드벨벳 찐팬만 맞출 수 있는 정답 모음</Title>
    </Wrap>
  );
};

export default TestTitle;
