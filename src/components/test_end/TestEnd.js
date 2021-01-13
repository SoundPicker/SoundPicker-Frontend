import Background from "../test_end/Bg";
import Header from "../test_end/Header";
import BlankTop from "../common/BlankTop";
import LogoTitle from "./LogoTitle";
import TestTitle from "./TestTitle";
import ThankYouText from "./ThankYouText";
import Divider from "../common/Divider";
import TestEndDivider from "../test_end/TestEndDivider";
import RecommendText from "./RecommendText";
import RecommendCardList from "./RecommendCardList";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TestEndBlankTop from "../test_end/TestEndBlankTop";

const TestEnd = ({ match, recommendList, title }) => {
  return (
    <Background>
      <Header />
      <TestEndBlankTop
        DesktopMargin={7.5}
        TabletMargin={16.4}
        MobileMargin={4.7}
        SmallMobileMargin={5.6}
      />
      <LogoTitle />
      <TestEndBlankTop
        DesktopMargin={3.1}
        TabletMargin={2.8}
        MobileMargin={2.5}
        SmallMobileMargin={1}
      />
      <TestTitle title={title["data"][0]["testTitle"]} />
      <TestEndBlankTop
        DesktopMargin={1.2}
        TabletMargin={1.2}
        MobileMargin={1.0}
      />
      <ThankYouText />
      <TestEndBlankTop
        DesktopMargin={5.6}
        TabletMargin={4.4}
        MobileMargin={3.3}
        SmallMobileMargin={2.7}
      />
      <TestEndDivider DesktopLength={6} TabletLength={6} MobileLength={0} />
      <TestEndBlankTop
        DesktopMargin={5.5}
        TabletMargin={4.4}
        MobileMargin={3.5}
        SmallMobileMargin={2.7}
      />
      <RecommendText />
      <TestEndBlankTop
        DesktopMargin={5.4}
        TabletMargin={4.4}
        MobileMargin={3.5}
        SmallMobileMargin={1.9}
      />
      <RecommendCardList recommendList={recommendList} />
      <TestEndBlankTop
        DesktopMargin={2.8}
        TabletMargin={3.7}
        MobileMargin={3}
        SmallMobileMargin={3}
      />
      <>
        <Link to="/">
          <Wrap>
            <BackBtn />
          </Wrap>
        </Link>
      </>
    </Background>
  );
};

const Wrap = styled.div`
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

  animation: fadeIn 1700ms 1;
  animation-timing-function: ease-in;
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.9rem;
  height: 4.4rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px #60ffcd;
  background: linear-gradient(90.66deg, #60ffcd -8.61%, #60f5ff 112.74%);

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &:focus {
    outline: none;
    animation: fadeOut 500ms;
  }

  &:after {
    content: "메인으로 돌아가기";
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a465e;
  }

  @media (max-width: 1089px) {
    width: 25.5rem;
    height: 4.4rem;
    box-shadow: 0 0 9px #60ffcd;
  }

  @media (max-width: 768px) {
    width: 20.6rem;
    height: 3.8rem;
    box-shadow: 0 0 9px #60ffcd;

    &:after {
      content: "메인으로";
      font-size: 1.4rem;
    }
  }
`;

export default TestEnd;
