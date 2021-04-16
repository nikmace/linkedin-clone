import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Feed from './components/HomeFeed/Feed';
import Home from './components/Authentication/Home';
import HomeBar from './components/Authentication/HomeBar';
import Signup from './components/Authentication/Signup/Signup';
import Login from './components/Authentication/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        
          <Switch>
            <Route path="/feed" exact >
              <Navbar />
              <Feed />
            </Route>
          </Switch>
        
        <Route path="/" exact>
          <HomeBar />
          <Home />
        </Route>

        <Route path="/signup" exact>
          <HomeBar />
          <Signup />
        </Route>
        <Route path="/login" exact>
          <HomeBar />
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;
