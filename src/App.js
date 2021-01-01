import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import TestPage from './pages/test/TestPage'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={MainPage}/> */}
        <Route exact path="/" component={TestPage} />
        <Route path="/*">404 Not Found</Route>
      </Switch>
    </Router>
  )
}

export default App
