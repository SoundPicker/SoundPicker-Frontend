import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import TestMakingPage from './pages/testmaking/TestMakingPage'
import MyPage from './pages/mypage/MyPage'
import QuizLoading from './components/loading/QuizLoading'
import StartLoading from './components/loading/StartLoading'
import TestPage from './pages/test/TestPage'
import TestEndPage from './pages/test_end/TestEndPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import TestEditPage from './pages/testedit/TestEditPage'
import Auth from './hoc/auth'
import ScrollToTop from '../src/components/common/ScrollToTop'

const App = ({ match }) => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            exact
            path="/testmaking"
            component={TestMakingPage}
          />
          <Route
            exact
            path="/testedit/:id"
            component={Auth(TestEditPage, true)}
          />
          <Route component={Auth(MyPage, true)} path="/mypage" exact />
          <Route component={QuizLoading} path="/quizloading" exact />
          <Route component={StartLoading} path="/startloading" exact />
          <Route
            component={TestEndPage}
            path="/test/:id/recommendation"
            exact
          />

          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route component={TestPage} path="/test/:id" />
          <Route path="/*">404 Not Found</Route>
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App
