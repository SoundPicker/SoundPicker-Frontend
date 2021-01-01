import styled from "styled-components";
import Plus from "../../../assets/mobile/button_add.png";
import BlankTop from "../../common/BlankTop";
import PlayImg from "../../../assets/play.png";

const PlusBtn = styled.button`
  display: block;
  width: 27.6rem;
  height: 5.5rem;
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  border-color: #60ffda;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Card = styled.button`
  display: block;
  width: 27.6rem;
  padding: 3.4rem 2.7rem 2.9rem 2.4rem;
  border-radius: 8px;
  border-color: #60ffda;
  color: #ffffff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const CardTitle = styled.div`
  width: 22.5rem;
  text-align: left;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.4rem;
`;

const CardContent = styled.div`
  width: 22.2rem;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2.2rem;
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

const CardWrapLeft = styled.div``;

const CardWrapRight = styled.div``;

const CardListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 57rem;
  height: 116.5rem;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`;

const GradientBox = styled.div`
  width: 60.1rem;
  height: 33rem;
  position: absolute;
  bottom: 0;
  left: -15.5px;
  background: linear-gradient(to bottom, transparent, #071923);
`;

const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35.2rem;
  height: 4.8rem;
  margin: 1.6rem auto 0;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.005em;
  border-radius: 5px;
  border: 2px solid #60ffda;
  color: #ffffff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const CardList = () => {
  return (
    <>
      <CardListWrap>
        <CardWrapLeft>
          <PlusBtn />
          <BlankTop DesktopMargin={1.6} TabletMargin={1.6} MobileMargin={1.8} />
          {[...Array(4)].map((n, index) => {
            return (
              <>
                <Card>
                  <CardTitle>오마이걸 찐팬만 맞출 수 있는 정답 모음</CardTitle>
                  <BlankTop
                    DesktopMargin={1.6}
                    TabletMargin={1.4}
                    MobileMargin={1.8}
                  />
                  <CardContent>
                    내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                    들어갑니다.
                  </CardContent>
                  <BlankTop
                    DesktopMargin={3.8}
                    TabletMargin={3.3}
                    MobileMargin={4.8}
                  />
                  <PlayFooter>
                    <TestNumber>10문제</TestNumber>
                    <PlayBox />
                  </PlayFooter>
                </Card>
                <BlankTop
                  DesktopMargin={1.6}
                  TabletMargin={1.6}
                  MobileMargin={1.8}
                />
                <Card>
                  <CardTitle>
                    오마이걸 찐팬 모여라 오마이걸 찐팬 오마이걸 찐팬 모여라.
                  </CardTitle>
                  <BlankTop
                    DesktopMargin={1.6}
                    TabletMargin={1.4}
                    MobileMargin={1.8}
                  />
                  <CardContent>
                    내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                    들어갑니다.내용이 들어갑니다.
                  </CardContent>
                  <BlankTop
                    DesktopMargin={3.8}
                    TabletMargin={3.3}
                    MobileMargin={4.8}
                  />
                  <PlayFooter>
                    <TestNumber>10문제</TestNumber>
                    <PlayBox />
                  </PlayFooter>
                </Card>
                <BlankTop
                  DesktopMargin={1.6}
                  TabletMargin={1.6}
                  MobileMargin={1.8}
                />
                <Card>
                  <CardTitle>
                    오마이걸 찐팬 모여라 오마이걸 찐팬 오마이걸 찐팬 모여라.
                    오마이걸 찐팬 모여라 오마이걸 찐팬 오마이걸 찐팬 모여라.
                  </CardTitle>
                  <BlankTop
                    DesktopMargin={1.6}
                    TabletMargin={1.4}
                    MobileMargin={1.8}
                  />
                  <CardContent>
                    내용이 들어갑니다.내용이 들어갑니다.
                  </CardContent>
                  <BlankTop
                    DesktopMargin={3.8}
                    TabletMargin={3.3}
                    MobileMargin={4.8}
                  />
                  <PlayFooter>
                    <TestNumber>10문제</TestNumber>
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
          })}
        </CardWrapLeft>
        <CardWrapRight>
          {[...Array(4)].map((n, index) => {
            return (
              <>
                <Card>
                  <CardTitle>오마이걸 찐팬 모여라 오마이걸 찐팬</CardTitle>
                  <BlankTop
                    DesktopMargin={1.6}
                    TabletMargin={1.4}
                    MobileMargin={1.8}
                  />
                  <CardContent>
                    내용이 들어갑니다. 내용이 들어갑니다.내용이
                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                  </CardContent>
                  <BlankTop
                    DesktopMargin={3.8}
                    TabletMargin={3.3}
                    MobileMargin={4.8}
                  />
                  <PlayFooter>
                    <TestNumber>10문제</TestNumber>
                    <PlayBox />
                  </PlayFooter>
                </Card>
                <BlankTop
                  DesktopMargin={1.6}
                  TabletMargin={1.6}
                  MobileMargin={1.8}
                />
                <Card>
                  <CardTitle>
                    오마이걸 찐팬 모여라 오마이걸 찐팬 오마이걸 찐팬 모여라.
                  </CardTitle>
                  <BlankTop
                    DesktopMargin={1.6}
                    TabletMargin={1.4}
                    MobileMargin={1.8}
                  />
                  <CardContent>
                    내용이 들어갑니다. 내용이 들어갑니다.내용이
                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                  </CardContent>
                  <BlankTop
                    DesktopMargin={3.8}
                    TabletMargin={3.3}
                    MobileMargin={4.8}
                  />
                  <PlayFooter>
                    <TestNumber>10문제</TestNumber>
                    <PlayBox />
                  </PlayFooter>
                </Card>
                <BlankTop
                  DesktopMargin={1.6}
                  TabletMargin={1.6}
                  MobileMargin={1.8}
                />
                <Card>
                  <CardTitle>
                    오마이걸 찐팬 모여라 오마이걸 찐팬 오마이걸 찐팬 모여라.
                  </CardTitle>
                  <BlankTop
                    DesktopMargin={1.6}
                    TabletMargin={1.4}
                    MobileMargin={1.8}
                  />
                  <CardContent>
                    내용이 들어갑니다. 내용이 들어갑니다.내용이
                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                  </CardContent>
                  <BlankTop
                    DesktopMargin={3.8}
                    TabletMargin={3.3}
                    MobileMargin={4.8}
                  />
                  <PlayFooter>
                    <TestNumber>10문제</TestNumber>
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
          })}
        </CardWrapRight>
        <GradientBox />
      </CardListWrap>
      <LoadMoreBtn>더보기</LoadMoreBtn>
    </>
  );
};

export default CardList;
