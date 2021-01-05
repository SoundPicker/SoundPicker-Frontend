import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import QuizLoading from './components/loading/QuizLoading';
import StartLoading from './components/loading/StartLoading';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route component={QuizLoading} path="/quizloading" exact/>
          <Route component={StartLoading} path="/startloading" exact/>
          <Route path='/*'>404 Not Found</Route>
        </Switch>
    </Router>
  );
};

export default App;
