// 중간에 너무 우겨져서 breakpoint를 1024->1089로 바꿈
import styled from "styled-components";
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
`;

const Card = styled.button`
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
    width: 21.827rem;
    height: 4.195rem;
  }
`;

const RecommendCardList = ({ recommendList }) => {
  return (
    <CardWrap>
      <CardBox>
        {recommendList.map((item, index) => {
          return (
            <Link to={`/test/${item.id}`}>
              <Card key={index}>
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
