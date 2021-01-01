import BlankTop from '../../components/common/BlankTop'
import TestCdWrapperContainer from '../../containers/test/TestCd/TestCdWrapperContainer'
import TestWrapperContainer from '../../containers/test/TestWrapperContainer'

const TestPage = () => {
  // state

  return (
    <>
      <TestWrapperContainer>
        {/* <div className="">헤더헤더헤더헤더헤더</div> */}
        {/* <BlankTop DesktopMargin="36" TabletMargin="10" MobileMargin="5" /> */}
        <TestCdWrapperContainer />
      </TestWrapperContainer>
      {/* <BlankTop DesktopMargin="20" TabletMargin="10" MobileMargin="5" /> */}
    </>
  )
}

export default TestPage
