// 중간에 너무 우겨져서 breakpoint를 1024->1089로 바꿈
import styled from "styled-components";
import BlankTop from "../common/BlankTop";

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 108.5rem;
  height: 43.2rem;

  @media (max-width: 1089px) {
    width: 72.9rem;
    height: 67rem;
  }

  @media (max-width: 768px) {
    width: 52.3rem;
    height: 52.9rem;
  }
`;

const Card = styled.div`
  width: 34.9rem;
  height: 20.7rem;
  padding: 3.2rem 4.8rem 2.1rem 2.9rem;
  border: 3px solid #60ffda;
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(96, 255, 205, 0.38) 0%,
      rgba(96, 255, 218, 0) 100%
    );
  }

  --angle: 90deg;

  @property --angle {
    syntax: "<angle>";
    initial-value: 90deg;
    inherits: true;
  }

  @keyframes borderRotate {
    100% {
      --angle: 420deg;
    }
  }

  border-image: conic-gradient(
      from var(--angle),
      rgba(96, 121, 255, 0.1),
      rgba(96, 255, 218, 1) 0.2turn,
      rgba(96, 255, 218, 1) 0.25turn,
      rgba(96, 121, 255, 0.1) 0.5turn
    )
    30;
  animation: borderRotate 2000ms linear infinite forwards;

  @media (max-width: 1089px) {
    width: 35.4rem;
    height: 21rem;
    padding: 2.847rem 2.235rem 2.136rem 2.503rem;
  }

  @media (max-width: 768px) {
    width: 25.2rem;
    height: 16.5rem;
    padding: 2.2rem 1.591rem 1.678rem 1.782rem;
  }
`;

const CardTitle = styled.div`
  width: 27.2rem;
  height: 9.4rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: left;
  color: #ffffff;

  @media (max-width: 1089px) {
    width: 30.662rem;
    height: 9.61rem;
    font-size: 2.4rem;
    line-height: 2;
  }

  @media (max-width: 768px) {
    width: 21.357rem;
    height: 7.6rem;
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

const CardContent = styled.div`
  width: 27.2rem;
  height: 4.3rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: #ffffff;

  @media (max-width: 1089px) {
    width: 30.662rem;
    height: 5.339rem;
  }

  @media (max-width: 768px) {
    width: 21.827rem;
    height: 4.195rem;
  }
`;

const RecommendCardList = () => {
  return (
    <CardWrap>
      <CardBox>
        {[...Array(6)].map((n, index) => {
          return (
            <Card>
              <CardTitle>
                오마이걸 찐팬 모여라 오마이걸 찐팬 모여라 오마이걸
              </CardTitle>
              <BlankTop
                DesktopMargin={1.7}
                TabletMargin={1.068}
                MobileMargin={0.827}
              />
              <CardContent>
                오마이걸 아린을 제일 사랑합니다. 오마이걸 아린을 제일
                사랑합니다. 오마이걸 아린
              </CardContent>
            </Card>
          );
        })}
      </CardBox>
    </CardWrap>
  );
};

export default RecommendCardList;
