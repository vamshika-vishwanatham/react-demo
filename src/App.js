import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import login from './Components/Login';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={login}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
