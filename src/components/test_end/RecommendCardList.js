// 중간에 너무 우겨져서 breakpoint를 1024->1089로 바꿈
import styled, { css } from "styled-components";
import BlankTop from "../common/BlankTop";
import { Link } from "react-router-dom";

const CardWrap = styled.div`
  display: flex;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1500ms 1;
  animation-timing-function: ease-in;
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

  @media (max-width: 503px) {
    width: 30.4rem;
  }
`;

const Card = styled.button`
  display: block;
  width: 34.9rem;
  height: 20.7rem;
  padding: 3.2rem 4.8rem 2.1rem 2.9rem;
  border: 3px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;

  ${(props) =>
    props.random >= 0 &&
    props.random <= 4 &&
    css`
      border-right-color: rgba(96, 255, 218, 0.88);
      border-left-color: rgba(94, 207, 255, 0.5);
      background: linear-gradient(
            to left,
            rgba(96, 255, 218, 0.88) 0%,
            rgba(94, 207, 255, 0.5) 100%
          )
          top/100% 3px,
        linear-gradient(
            to left,
            rgba(96, 255, 218, 0.88) 0%,
            rgba(94, 207, 255, 0.5) 100%
          )
          bottom/100% 3px;
    `}

  ${(props) =>
    props.random >= 5 &&
    props.random <= 9 &&
    css`
      border-right-color: rgba(94, 207, 255, 0.5);
      border-left-color: rgba(96, 255, 218, 0.88);
      background: linear-gradient(
            to left,
            rgba(94, 207, 255, 0.5) 0%,
            rgba(96, 255, 218, 0.88) 100%
          )
          top/100% 3px,
        linear-gradient(
            to left,
            rgba(94, 207, 255, 0.5) 0%,
            rgba(96, 255, 218, 0.88) 100%
          )
          bottom/100% 3px;
    `}

    background-repeat: no-repeat;

  &:hover {
    border: 3px solid transparent;
    border-bottom: 3px solid #081923;
    background: linear-gradient(
      180deg,
      rgba(96, 255, 205, 0.38) 10%,
      rgba(96, 255, 218, 0) 90%
    );
    transition: background 500ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

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

  @media (max-width: 503px) {
    width: 14.6rem;
    padding: 1.8rem 1.3rem 1.3rem;
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
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

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

  @media (max-width: 503px) {
    width: 11.4rem;
    font-size: 1.4rem;
    line-height: 2.1rem;
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
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1089px) {
    width: 30.662rem;
    height: 5.339rem;
  }

  @media (max-width: 768px) {
    width: 21.357rem;
    height: 4.195rem;
  }

  @media (max-width: 503px) {
    width: 11.4rem;
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const RecommendCardList = ({ recommendList }) => {
  return (
    <CardWrap>
      <CardBox>
        {recommendList.map((item, index) => {
          return (
            <Link to={`/test/${item.id}`}>
              <Card key={index} random={Math.floor(Math.random() * 10)}>
                <CardTitle>{item["title"]}</CardTitle>
                <BlankTop
                  DesktopMargin={1.7}
                  TabletMargin={1.068}
                  MobileMargin={0.827}
                />
                <CardContent>{item["description"]}</CardContent>
              </Card>
            </Link>
          );
        })}
      </CardBox>
    </CardWrap>
  );
};

export default RecommendCardList;
