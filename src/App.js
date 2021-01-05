import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import MainPage from './pages/main/MainPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/*">404 Not Found</Route>
      </Switch>
    </Router>
  )
}

export default App
