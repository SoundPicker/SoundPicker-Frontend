import styled from "styled-components";

const BlankDiv = styled.div`
  width: 100%;
  margin-top: ${(props) => props.DesktopMargin || 0}rem;
  @media only screen and (max-width: 1024px) {
    margin-top: ${(props) => props.TabletMargin || 0}rem;
  }
  @media only screen and (max-width: 828px) {
    margin-top: ${(props) => props.MobileMargin || 0}rem;
  }
  @media only screen and (max-width: 568px) {
    margin-top: ${(props) => props.SmallMobileMargin || 0}rem;
  }
`;

const MainBlankTop = ({
  DesktopMargin,
  TabletMargin,
  MobileMargin,
  SmallMobileMargin,
}) => {
  // 이 친구는 마진을 담당하는 친구야... 예시로 만들어 놨지만 유용하게 써주길 바래
  return (
    <BlankDiv
      DesktopMargin={DesktopMargin}
      TabletMargin={TabletMargin}
      MobileMargin={MobileMargin}
      SmallMobileMargin={SmallMobileMargin}
    ></BlankDiv>
  );
};

export default MainBlankTop;
