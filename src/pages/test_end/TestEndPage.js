import BlankTop from "../../components/common/BlankTop";
import TestEndContainer from "../../containers/test_end/TestEndContainer";

const TestEndPage = (match) => {
  return (
    <>
      <TestEndContainer match={match} />
      <BlankTop DesktopMargin="20" TabletMargin="10" MobileMargin="5" />
    </>
  );
};

export default TestEndPage;
