import React, { useEffect } from 'react';
import ErrorPage from './pages/ErrorPage.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Landing }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/register" component={ Register }/>
        <Route component={ ErrorPage }/>
      </Switch>
    </Router>
  )
}

export default App