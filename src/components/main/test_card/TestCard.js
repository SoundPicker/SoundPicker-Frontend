// 카드 크기 때문에 breakpoint - 1440(추가), 768 -> 828로 변경
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import PlusDesktop from "../../../assets/desktop/button_add.png";
import PlusTablet from "../../../assets/tablet/button_add.png";
import PlusMobile from "../../../assets/mobile/button_add.png";
import PlusSmallMobile from "../../../assets/small_mobile/button_add.png";
import BlankTop from "../../common/BlankTop";
import PlayImg from "../../../assets/play.png";
import MainBlankTop from "../MainBlankTop";

const PlusBtn = styled.div`
  display: block;
  width: 29.6rem;
  height: 5.6rem;
  position: relative;
  background-image: url(${PlusDesktop});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  border: 3px solid rgba(96, 255, 218, 0.88);
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
  @media (max-width: 568px) {
    width: 14.6rem;
    height: 2.8rem;
    border-width: 2px;
    background-image: url(${PlusSmallMobile});
  }
`;

const Card = styled.div`
  display: block;
  width: 29.6rem;
  position: relative;
  padding: 3.6rem 2.7rem 2rem 2.7rem;
  border-radius: 10px;
  border: 3px solid transparent;
  cursor: pointer;
  color: #ffffff;
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

  &:focus {
    outline: none;
  }

  &:hover {
    border: 3px solid transparent;
    border-bottom: 3px solid #071923;
    background: linear-gradient(
      180deg,
      rgba(96, 255, 205, 0.38) 10%,
      rgba(96, 255, 218, 0) 90%
    );
    @media (max-width: 568px) {
      border-width: 2px;
    }
    transition: background 500ms ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 26.2rem;
    padding: 3.2rem 2.4rem 1.8rem 2.4rem;
  }
  @media (max-width: 828px) {
    width: 27.6rem;
    padding: 3.4rem 2.4rem 2.9rem 2.4rem;
  }
  @media (max-width: 568px) {
    width: 14.6rem;
    padding: 1.8rem 1.3rem 1.3rem;
    border-width: 2px;
    background-size: 100% 2px, 100% 2px;
  }
`;

const CardTitle = styled.div`
  width: 23.6rem;
  text-align: left;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.65rem;

  @media (max-width: 1024px) {
    width: 20.8rem;
    font-size: 2.8rem;
    line-height: 4rem;
  }
  @media (max-width: 828px) {
    width: 22.2rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
  @media (max-width: 568px) {
    width: 11.4rem;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

const CardContent = styled.div`
  width: 23.6rem;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media (max-width: 1024px) {
    width: 20.8rem;
    line-height: 1.8rem;
  }
  @media (max-width: 828px) {
    width: 22.2rem;
    line-height: 2.2rem;
  }
  @media (max-width: 568px) {
    width: 11.4rem;
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const TestNumber = styled.div`
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const Play = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const PlayBtn = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-image: url(${PlayImg});
  background-repeat: no-repeat;
  background-position: right center;
`;

const PlayBtnBox = styled.div`
  display: flex;
  width: 6.6rem;
  justify-content: flex-end;
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

const CardWrapOne = styled.div`
  //카드 테두리때문에
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1700ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1440px) {
    width: 92rem;
  }

  @media (max-width: 1024px) {
    width: 81.6rem;
  }

  @media (max-width: 828px) {
    width: 57rem;
  }

  @media (max-width: 568px) {
    width: 30.4rem;
  }
`;

const GradientBox = styled.div`
  width: 130.3rem;
  height: 22.2rem;
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

  @media (max-width: 568px) {
    width: 32.2rem;
    height: 19.8rem;
    left: -0.9rem;
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
  border: 2px solid transparent;
  cursor: pointer;
  color: #ffffff;
  background-color: transparent;

  border-right-color: #00fff0;
  border-left-color: #00c2ff;
  background: linear-gradient(to left, #00fff0 0%, #00c2ff 100%) top/100% 3px,
    linear-gradient(to left, #00fff0 0%, #00c2ff 100%) bottom/100% 3px;
  background-repeat: no-repeat;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 3500ms 1;
  animation-timing-function: ease-in;

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

  @media (max-width: 568px) {
    width: 30.4rem;
    height: 3.6rem;
    margin: 1.2rem auto 0;
    font-size: 1.2rem;
    border-width: 2px;
    background-size: 100% 2px, 100% 2px;
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

const CardList = ({ testList, testList2 }) => {
  testList = Object.values(testList);

  // testList와 testList2에 공통으로 있는 것만 리턴
  let finalList = [];
  testList.forEach((item) => {
    testList2.forEach((item2) => {
      if (
        item.title.toLowerCase().includes(item2.title.toLowerCase()) &&
        item.description.toLowerCase().includes(item2.description.toLowerCase())
      ) {
        finalList.push(item2);
      }
    });
  });

  const history = useHistory();

  const [count, setCount] = useState(2);

  const { width } = useWindowDimensions();

  const divideNum = width > 1440 ? 4 : width > 828 ? 3 : 2;
  const divided = parseInt(finalList.length / divideNum);
  const leftOver = finalList.length % divideNum;

  let one = divided + leftOver,
    two = divided,
    three = divided,
    four = divided;
  if (leftOver === 2) {
    two += 1;
    one -= 1;
  }
  if (leftOver === 3) {
    two += 1;
    three += 1;
    one -= 2;
  }
  if (leftOver === 4) {
    two += 1;
    three += 1;
    four += 1;
    one -= 3;
  }

  const defaultHeight = width > 568 ? 116.5 : 65;
  const [height, setHeight] = useState(defaultHeight);
  const countPlus = (e) => {
    setCount(count + 1);
    setHeight(count * defaultHeight);
  };

  const max = Math.max(one, two, three, four);

  // divide는 한 번에 나오는 더보기 묶음 개수
  const divide = width > 568 ? Math.round(max / 4) : Math.round(max / 3.5);

  const maxHeight = width > 568 ? divide * 119 : divide * 65;

  return (
    <>
      <CardListWrap height={height}>
        <CardWrapOne>
          <Link to="/testmaking">
            <PlusBtn random={Math.floor(Math.random() * 10)} />
          </Link>
          <BlankTop DesktopMargin={1.6} TabletMargin={1.6} MobileMargin={1.8} />
          <>
            {finalList.map((item, index) => {
              if (index < one) {
                return (
                  <div key={index}>
                    <Card
                      onClick={() => history.push(`/test/${item["id"]}`)}
                      random={Math.floor(Math.random() * 10)}
                    >
                      <CardTitle>{item["title"]}</CardTitle>
                      <MainBlankTop
                        DesktopMargin={3}
                        TabletMargin={2.7}
                        MobileMargin={2.4}
                        SmallMobileMargin={1.9}
                      />
                      <CardContent>{item["description"]}</CardContent>
                      <MainBlankTop
                        DesktopMargin={3}
                        TabletMargin={2.7}
                        MobileMargin={2.4}
                        SmallMobileMargin={1.9}
                      />
                      <PlayFooter>
                        <TestNumber>{item["questionCount"]}문제</TestNumber>
                        <PlayBox />
                      </PlayFooter>
                    </Card>
                    <MainBlankTop
                      DesktopMargin={1.6}
                      TabletMargin={1.6}
                      MobileMargin={1.8}
                      SmallMobileMargin={1.2}
                    />
                  </div>
                );
              }
            })}
          </>
        </CardWrapOne>
        <CardWrapTwo>
          <>
            {finalList.map((item, index) => {
              if (width <= 828) {
                if (index >= one) {
                  return (
                    <div key={index}>
                      <Card
                        onClick={() => history.push(`/test/${item["id"]}`)}
                        random={Math.floor(Math.random() * 10)}
                      >
                        <CardTitle>{item["title"]}</CardTitle>
                        <MainBlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={2.4}
                          SmallMobileMargin={1.9}
                        />
                        <CardContent>{item["description"]}</CardContent>
                        <MainBlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={2.4}
                          SmallMobileMargin={1.9}
                        />
                        <PlayFooter>
                          <TestNumber>{item["questionCount"]}문제</TestNumber>
                          <PlayBox />
                        </PlayFooter>
                      </Card>
                      <MainBlankTop
                        DesktopMargin={1.6}
                        TabletMargin={1.6}
                        MobileMargin={1.8}
                        SmallMobileMargin={1.2}
                      />
                    </div>
                  );
                }
              } else {
                if (index >= one && index < one + two) {
                  return (
                    <div key={index}>
                      <Card
                        onClick={() => history.push(`/test/${item["id"]}`)}
                        random={Math.floor(Math.random() * 10)}
                      >
                        <CardTitle>{item["title"]}</CardTitle>
                        <MainBlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={2.4}
                          SmallMobileMargin={1.9}
                        />
                        <CardContent>{item["description"]}</CardContent>
                        <MainBlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={2.4}
                          SmallMobileMargin={1.9}
                        />
                        <PlayFooter>
                          <TestNumber>{item["questionCount"]}문제</TestNumber>
                          <PlayBox />
                        </PlayFooter>
                      </Card>
                      <MainBlankTop
                        DesktopMargin={1.6}
                        TabletMargin={1.6}
                        MobileMargin={1.8}
                        SmallMobileMargin={1.2}
                      />
                    </div>
                  );
                }
              }
            })}
          </>
        </CardWrapTwo>
        <CardWrapThree>
          <>
            {finalList.map((item, index) => {
              if (width <= 1440) {
                if (index >= one + two) {
                  return (
                    <div key={index}>
                      <Card
                        onClick={() => history.push(`/test/${item["id"]}`)}
                        random={Math.floor(Math.random() * 10)}
                      >
                        <CardTitle>{item["title"]}</CardTitle>
                        <BlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={2.4}
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
                    </div>
                  );
                }
              } else {
                if (index >= one + two && index < one + two + three) {
                  return (
                    <div key={index}>
                      <Card
                        onClick={() => history.push(`/test/${item["id"]}`)}
                        random={Math.floor(Math.random() * 10)}
                      >
                        <CardTitle>{item["title"]}</CardTitle>
                        <BlankTop
                          DesktopMargin={3}
                          TabletMargin={2.7}
                          MobileMargin={2.4}
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
                    </div>
                  );
                }
              }
            })}
          </>
        </CardWrapThree>
        <CardWrapFour>
          <>
            {finalList.map((item, index) => {
              if (index >= one + two + three) {
                return (
                  <div key={index}>
                    <Card
                      onClick={() => history.push(`/test/${item["id"]}`)}
                      random={Math.floor(Math.random() * 10)}
                    >
                      <CardTitle>{item["title"]}</CardTitle>
                      <BlankTop
                        DesktopMargin={3}
                        TabletMargin={2.7}
                        MobileMargin={2.4}
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
                  </div>
                );
              }
            })}
          </>
        </CardWrapFour>
        <GradientBox />
      </CardListWrap>
      {height < maxHeight && (
        <LoadMoreBtn onClick={countPlus}>더보기</LoadMoreBtn>
      )}
    </>
  );
};

export default CardList;
