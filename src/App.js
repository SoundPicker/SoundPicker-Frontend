import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import MyPage from "./pages/mypage/MyPage";
import QuizLoading from './components/loading/QuizLoading';
import StartLoading from './components/loading/StartLoading';
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route component={MyPage} path="/mypage" exact/>
          <Route component={SignUp} path="/signup" exact/>
          <Route component={QuizLoading} path="/quizloading" exact/>
          <Route component={StartLoading} path="/startloading" exact/>
          <Route path='/*'>404 Not Found</Route>
        </Switch>
    </Router>
  );
}

export default App;