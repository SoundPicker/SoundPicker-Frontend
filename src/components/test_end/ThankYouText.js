import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  height: 1.6rem;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: #ffffff;
`;

const ThankYouText = () => {
  return (
    <Wrap>
      <Text>모든 문제가 끝났습니다. 수고하셨습니다 :&#41;</Text>
    </Wrap>
  );
};

export default ThankYouText;
