import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vaccination from './components/Vaccination'
import NotFound from './components/NotFound'
import StateSpecificDetails from './components/StateSpecificDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/vaccination" component={Vaccination} />
    <Route exact path="/state/:stateCode" component={StateSpecificDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
