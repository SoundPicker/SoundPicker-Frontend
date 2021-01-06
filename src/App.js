import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import TestMakingPage from './pages/testmaking/TestMakingPage'
import MyPage from './pages/mypage/MyPage'
import QuizLoading from './components/loading/QuizLoading'
import StartLoading from './components/loading/StartLoading'
import TestPage from './pages/test/TestPage'
import TestEnd from './components/test_end/TestEnd'
const App = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/testmaking" component={TestMakingPage} />
        <Route component={MyPage} path="/mypage" exact />
        <Route component={QuizLoading} path="/quizloading" exact />
        <Route component={StartLoading} path="/startloading" exact />
        <Route component={TestEnd} path="/test/recommendation" exact />
        <Route component={TestPage} path="/test/:id" />
        <Route path="/*">404 Not Found</Route>
      </Switch>
    </Router>
  )
}

export default App
