import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import TestMakingPage from "./pages/testmaking/TestMakingPage";
import MyPage from "./pages/mypage/MyPage";
import QuizLoading from "./components/loading/QuizLoading";
import StartLoading from "./components/loading/StartLoading";
import TestPage from "./pages/test/TestPage";
import TestEndPage from "./pages/test_end/TestEndPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/testmaking" component={TestMakingPage} />
        <Route component={MyPage} path="/mypage" exact />
        <Route component={QuizLoading} path="/quizloading" exact />
        <Route component={StartLoading} path="/startloading" exact />
        <Route component={TestPage} path="/test" exact />
        <Route component={TestEndPage} path="/testend" exact />
        <Route path="/*">404 Not Found</Route>
      </Switch>
    </Router>
  );
};

export default App;
