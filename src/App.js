import './App.css';
import Home from './component/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './component/about/About'
import Project from './component/project/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/project">
          
          <Project/>
          </Route>
         
        </Switch>

      </div>
    </Router>
  );
}

export default App;
