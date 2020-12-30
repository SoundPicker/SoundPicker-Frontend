import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import LoadingPage from './components/loading/LoadingComponent';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route component={LoadingPage} path="/loading" exact/>
          <Route path='/*'>404 Not Found</Route>
        </Switch>
    </Router>
  );
}

export default App;