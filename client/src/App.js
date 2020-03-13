import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import ErrorPage from './pages/ErrorPage.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './middleware/setAuthToken';

if(localStorage.getItem('token')){
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  },[])

  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path="/" component={ Landing }/>
          <Route exact path="/login" component={ Login }/>
          <Route exact path="/register" component={ Register }/>
          <Route component={ ErrorPage }/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App