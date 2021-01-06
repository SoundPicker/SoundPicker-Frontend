// 카드 크기 때문에 breakpoint - 1440(추가), 768 -> 828로 변경
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PlusDesktop from "../../../assets/desktop/button_add.png";
import PlusTablet from "../../../assets/tablet/button_add.png";
import PlusMobile from "../../../assets/mobile/button_add.png";
import BlankTop from "../../common/BlankTop";
import PlayImg from "../../../assets/play.png";

const PlusBtn = styled.div`
  display: block;
  width: 29.6rem;
  height: 5.6rem;
  position: relative;
  background-image: url(${PlusDesktop});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  border: 3px solid #ffffff;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 26.2rem;
    height: 4.8rem;
    background-image: url(${PlusTablet});
  }
  @media (max-width: 828px) {
    width: 27.6rem;
    height: 5.5rem;
    background-image: url(${PlusMobile});
  }
`;

const Card = styled.div`
  display: block;
  width: 29.6rem;
  position: relative;
  padding: 3.6rem 2.1rem 2rem 2.7rem;
  border-radius: 8px;
  border: 3px solid;
  cursor: pointer;
  color: #ffffff;
  background-color: transparent;
  overflow: hidden;

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(96, 255, 205, 0.38) 0%,
      rgba(96, 255, 218, 0) 100%
    );
  }

  @media (max-width: 1024px) {
    width: 26.2rem;
    padding: 3.2rem 1.9rem 1.8rem 2.4rem;
  }
  @media (max-width: 828px) {
    width: 27.6rem;
    padding: 3.4rem 2.5rem 2.9rem 2.4rem;
  }
`;

const CardTitle = styled.div`
  width: 22.5rem;
  text-align: left;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.65rem;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
    line-height: 4rem;
  }
  @media (max-width: 828px) {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

const CardContent = styled.div`
  width: 22.2rem;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media (max-width: 1024px) {
    line-height: 1.8rem;
  }
  @media (max-width: 828px) {
    line-height: 2.2rem;
  }
`;

const TestNumber = styled.div`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const Play = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const PlayBtn = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-image: url(${PlayImg});
  background-repeat: no-repeat;
  background-position: center center;
`;

const PlayBtnBox = styled.div`
  display: flex;
  width: 6.6rem;
  align-items: center;
`;

const PlayBox = () => {
  return (
    <PlayBtnBox>
      <Play>플레이</Play>
      <PlayBtn />
    </PlayBtnBox>
  );
};

const PlayFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardWrapOne = styled.div``;

const CardWrapTwo = styled.div``;

const CardWrapThree = styled.div`
  @media (max-width: 828px) {
    display: none;
  }
`;

const CardWrapFour = styled.div`
  @media (max-width: 1440px) {
    display: none;
  }
`;

const CardListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 123.2rem;
  height: ${(props) => props.height}rem;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1440px) {
    width: 92rem;
  }

  @media (max-width: 1024px) {
    width: 81.6rem;
  }

  @media (max-width: 828px) {
    width: 57rem;
  }
`;

const GradientBox = styled.div`
  width: 130.3rem;
  height: 33.3rem;
  position: absolute;
  bottom: 0;
  left: -3.55rem;
  background: linear-gradient(to bottom, transparent, #071923);

  @media (max-width: 1440px) {
    width: 95.7rem;
    left: -1.85rem;
  }

  @media (max-width: 1024px) {
    width: 86rem;
    left: -2.2rem;
  }

  @media (max-width: 828px) {
    width: 60.1rem;
    left: -1.55rem;
  }
`;

const LoadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60.7rem;
  height: 6rem;
  margin: 1.4rem auto 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  border-radius: 8px;
  border: 3px solid;
  cursor: pointer;
  color: #ffffff;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 1440px) {
    width: 29.6rem;
    height: 6rem;
    margin: 0.9rem auto 0;
  }

  @media (max-width: 1024px) {
    width: 26.2rem;
    height: 5.2rem;
    margin: 1.5rem auto 0;
    font-size: 1.8rem;
    letter-spacing: 0;
  }
  @media (max-width: 828px) {
    width: 35.2rem;
    height: 4.8rem;
    margin: 0.7rem auto 0;
    letter-spacing: 0.005em;
  }
`;

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const CardList = ({ testList }) => {
  console.log(testList);
  const [count, setCount] = useState(2);
  const [height, setHeight] = useState(116.5);
  const countPlus = (e) => {
    setCount(count + 1);
    console.log(count);
    setHeight(count * 116.5);
    console.log(height);
  };

  const { width } = useWindowDimensions();

  const divideNum = width > 1440 ? 4 : width > 828 ? 3 : 2;
  const divided = parseInt(testList.length / divideNum);

  const testNum = testList.length;

  let one_dividedBy2 = parseInt(testNum / 2);
  let two_divideBy2 = testNum - one_dividedBy2;
  //one_devidedBy3, two_devidedBy3, three_devidedBy3
  // one_devidedBy4, two_devidedBy4, three_devidedBy4, four_devidedBy4

  return (
    <>
      <CardListWrap height={height}>
        <CardWrapOne>
          <Link to="/testmaking">
            <PlusBtn />
          </Link>
          <BlankTop DesktopMargin={1.6} TabletMargin={1.6} MobileMargin={1.8} />
          <>
            {testList.map((item, index) => {
              if (index < divided) {
                return (
                  <>
                    <Card key={index}>
                      <CardTitle>{item["title"]}</CardTitle>
                      <BlankTop
                        DesktopMargin={3}
                        TabletMargin={2.7}
                        MobileMargin={0.4}
                      />
                      <CardContent>{item["description"]}</CardContent>
                      <BlankTop
                        DesktopMargin={3.8}
                        TabletMargin={3.3}
                        MobileMargin={4.8}
                      />
                      <PlayFooter>
                        <TestNumber>{item["questionCount"]}문제</TestNumber>
                        <PlayBox />
                      </PlayFooter>
                    </Card>
                    <BlankTop
                      DesktopMargin={1.6}
                      TabletMargin={1.6}
                      MobileMargin={1.8}
                    />
                  </>
                );
              }
            })}
          </>
        </CardWrapOne>
        <CardWrapTwo>
          <>
            {testList.map((item, index) => {
              if (width <= 828) {
                if (index >= divided) {
                  return (
                    <>
                      <Card key={index}>
                        <CardTitle>{item["title"]}</CardTitle>
                        <BlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={0.4}
                        />
                        <CardContent>{item["description"]}</CardContent>
                        <BlankTop
                          DesktopMargin={3.8}
                          TabletMargin={3.3}
                          MobileMargin={4.8}
                        />
                        <PlayFooter>
                          <TestNumber>{item["questionCount"]}문제</TestNumber>
                          <PlayBox />
                        </PlayFooter>
                      </Card>
                      <BlankTop
                        DesktopMargin={1.6}
                        TabletMargin={1.6}
                        MobileMargin={1.8}
                      />
                    </>
                  );
                }
              } else {
                if (index >= divided && index < 2 * divided) {
                  return (
                    <>
                      <Card key={index}>
                        <CardTitle>{item["title"]}</CardTitle>
                        <BlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={0.4}
                        />
                        <CardContent>{item["description"]}</CardContent>
                        <BlankTop
                          DesktopMargin={3.8}
                          TabletMargin={3.3}
                          MobileMargin={4.8}
                        />
                        <PlayFooter>
                          <TestNumber>{item["questionCount"]}문제</TestNumber>
                          <PlayBox />
                        </PlayFooter>
                      </Card>
                      <BlankTop
                        DesktopMargin={1.6}
                        TabletMargin={1.6}
                        MobileMargin={1.8}
                      />
                    </>
                  );
                }
              }
            })}
          </>
        </CardWrapTwo>
        <CardWrapThree>
          <>
            {testList.map((item, index) => {
              if (width <= 1440) {
                if (index >= 2 * divided) {
                  return (
                    <>
                      <Card key={index}>
                        <CardTitle>{item["title"]}</CardTitle>
                        <BlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={0.4}
                        />
                        <CardContent>{item["description"]}</CardContent>
                        <BlankTop
                          DesktopMargin={3.8}
                          TabletMargin={3.3}
                          MobileMargin={4.8}
                        />
                        <PlayFooter>
                          <TestNumber>{item["questionCount"]}문제</TestNumber>
                          <PlayBox />
                        </PlayFooter>
                      </Card>
                      <BlankTop
                        DesktopMargin={1.6}
                        TabletMargin={1.6}
                        MobileMargin={1.8}
                      />
                    </>
                  );
                }
              } else {
                if (index >= 2 * divided && index < 3 * divided) {
                  return (
                    <>
                      <Card key={index}>
                        <CardTitle>{item["title"]}</CardTitle>
                        <BlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={0.4}
                        />
                        <CardContent>{item["description"]}</CardContent>
                        <BlankTop
                          DesktopMargin={3.8}
                          TabletMargin={3.3}
                          MobileMargin={4.8}
                        />
                        <PlayFooter>
                          <TestNumber>{item["questionCount"]}문제</TestNumber>
                          <PlayBox />
                        </PlayFooter>
                      </Card>
                      <BlankTop
                        DesktopMargin={1.6}
                        TabletMargin={1.6}
                        MobileMargin={1.8}
                      />
                    </>
                  );
                }
              }
            })}
          </>
        </CardWrapThree>
        <CardWrapFour>
          <>
            {testList.map((item, index) => {
              if (index >= 3 * divided) {
                return (
                  <>
                    <Card key={index}>
                      <CardTitle>{item["title"]}</CardTitle>
                      <BlankTop
                        DesktopMargin={3}
                        TabletMargin={2.7}
                        MobileMargin={0.4}
                      />
                      <CardContent>{item["description"]}</CardContent>
                      <BlankTop
                        DesktopMargin={3.8}
                        TabletMargin={3.3}
                        MobileMargin={4.8}
                      />
                      <PlayFooter>
                        <TestNumber>{item["questionCount"]}문제</TestNumber>
                        <PlayBox />
                      </PlayFooter>
                    </Card>
                    <BlankTop
                      DesktopMargin={1.6}
                      TabletMargin={1.6}
                      MobileMargin={1.8}
                    />
                  </>
                );
              }
            })}
          </>
        </CardWrapFour>
        <GradientBox />
      </CardListWrap>
      <LoadMoreBtn onClick={countPlus}>더보기</LoadMoreBtn>
    </>
  );
};

export default CardList;
