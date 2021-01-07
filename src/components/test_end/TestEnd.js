import Background from "../test_end/Bg";
import Header from "../test_end/Header";
import BlankTop from "../common/BlankTop";
import LogoTitle from "./LogoTitle";
import TestTitle from "./TestTitle";
import ThankYouText from "./ThankYouText";
import Divider from "../common/Divider";
import RecommendText from "./RecommendText";
import RecommendCardList from "./RecommendCardList";
import BackToMain from "./BackToMain";

const TestEnd = ({ match, recommendList, title }) => {
  console.log(title);
  return (
    <Background>
      <Header />
      <BlankTop DesktopMargin={12.3} TabletMargin={18.4} MobileMargin={6.7} />
      <LogoTitle />
      <BlankTop DesktopMargin={3.1} TabletMargin={2.8} MobileMargin={2.5} />
      <TestTitle title={title} />
      <BlankTop DesktopMargin={1.2} TabletMargin={1.2} MobileMargin={1.0} />
      <ThankYouText />
      <BlankTop DesktopMargin={5.6} TabletMargin={4.4} MobileMargin={3.3} />
      <Divider DesktopLength={6} TabletLength={6} MobileLength={4.8} />
      <BlankTop DesktopMargin={5.5} TabletMargin={4.4} MobileMargin={3.5} />
      <RecommendText />
      <BlankTop DesktopMargin={5.4} TabletMargin={4.4} MobileMargin={3.5} />
      <RecommendCardList recommendList={recommendList} />
      <BlankTop DesktopMargin={2.8} TabletMargin={3.7} MobileMargin={3} />
      <BackToMain />
    </Background>
  );
};

export default TestEnd;
