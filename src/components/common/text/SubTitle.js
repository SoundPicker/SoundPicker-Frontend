// 소리로 하는 모든 즐거움
import styled from "styled-components";

const text = styled.span`
  font-weight: ${(props) => props.weight};
  color: #ffffff;
`;

const SubTitle = (weight) => {
  return (
    <>
      <text weight="700">소리로</text>
      <text weight="400">하는 모든 </text>
      <text weight="700">즐거움</text>
    </>
  );
};

export default SubTitle;
