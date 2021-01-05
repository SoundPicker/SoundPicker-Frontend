import BlankTop from '../../components/common/BlankTop'
import TestCdWrapperContainer from '../../containers/test/TestCd/TestCdWrapperContainer'
import TestWrapperContainer from '../../containers/test/TestWrapperContainer'

const TestPage = () => {
  // state

  return (
    <>
      <TestWrapperContainer>
        <TestCdWrapperContainer />
      </TestWrapperContainer>
    </>
  )
}

export default TestPage
