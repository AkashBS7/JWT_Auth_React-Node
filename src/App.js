import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import DashBoard from './components/DashBoard';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(()=>{
    const token = getToken();
    if(!token) {
      return;
    }

    fetch(`http://localhost:4000/verifyToken?token=${token}`,{
      method: 'GET'
    })
    .then((response) => response.json())
    .then((data)=>{
      console.log('daata',data);
      setUserSession(data.token, data.user)
      setAuthLoading(false);
    }).catch(err => console.log(err));
  },[]);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  
  return (
    <div>
      <Router>
         <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
        <Switch>
          <Route exact path='/' component={Home}/>
            
          <PublicRoute path='/login' component={LoginPage} />
            {/* <LoginPage /> */}

          <PrivateRoute path='/dashboard' component={DashBoard} />
            {/* <DashBoard /> */}
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
