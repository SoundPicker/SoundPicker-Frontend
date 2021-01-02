import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import TestMakingPage from "./pages/testmaking/TestMakingPage";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/testmaking" component={TestMakingPage}/>          
          <Route path='/*'>404 Not Found</Route>
        </Switch>
    </Router>
  );
}

export default App;