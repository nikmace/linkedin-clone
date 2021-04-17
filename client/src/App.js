import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import Feed from './components/HomeFeed/Feed';
import Home from './components/Authentication/Home';
import HomeBar from './components/Authentication/HomeBar';
import Signup from './components/Authentication/Signup/Signup';
import Login from './components/Authentication/Login/Login';

import { isAuthenticated } from './services/auth/is-authenticated';

function App() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const checkForUser = async () => {
      const verified = await isAuthenticated();
      setUser(verified);
    }
    console.log(user)
    checkForUser();
  }, []);


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
          <HomeBar user={user} />
          <Home />
        </Route>

        <Route path="/signup" exact>
          <HomeBar user={user} />
          <Signup />
        </Route>
        <Route path="/login" exact>
          <HomeBar user={user} />
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;
