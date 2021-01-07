
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import TestMakingPage from "./pages/testmaking/TestMakingPage";
import MyPage from "./pages/mypage/MyPage";
import QuizLoading from './components/loading/QuizLoading';
import StartLoading from './components/loading/StartLoading';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/testmaking" component={Auth(TestMakingPage,true)}/>          
          <Route component={MyPage} path="/mypage" exact/>
          <Route component={QuizLoading} path="/quizloading" exact/>
          <Route component={StartLoading} path="/startloading" exact/>
          <Route exact path="/register" component={Auth(RegisterPage,false)}/>
          <Route exact path="/login" component={Auth(LoginPage,null)}/>
          <Route path='/*'>404 Not Found</Route>
        </Switch>
    </Router>
  );
};

export default App;

