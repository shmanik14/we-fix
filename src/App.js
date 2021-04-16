import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home/Home';

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
