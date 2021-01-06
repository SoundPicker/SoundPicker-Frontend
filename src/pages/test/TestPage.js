import BlankTop from '../../components/common/BlankTop'
import TestCdWrapperContainer from '../../containers/test/TestCd/TestCdWrapperContainer'
import TestWrapperContainer from '../../containers/test/TestWrapperContainer'

const TestPage = ({ match }) => {
  // state
  return (
    <>
      <TestWrapperContainer>
        <TestCdWrapperContainer match={match} />
      </TestWrapperContainer>
    </>
  )
}

export default TestPage
