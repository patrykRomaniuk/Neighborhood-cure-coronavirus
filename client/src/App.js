import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import ErrorPage from './pages/ErrorPage.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/authForms/Login.jsx';
import Register from './pages/authForms/Register.jsx';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './middleware/setAuthToken';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Map from './pages/Map';
import AddMapPost from './pages/AddMapPost';
import UserProfile from './pages/UserProfile';
import Settings from './pages/settings/Settings';
import SingleTaskPage from './pages/SingleTaskPage';
import SingleUser from './pages/SingleUser';
import ChangePassword from './pages/settings/ChangePassword';
import DeleteUserAccount from './pages/settings/DeleteUserAccount';
import './styles/styleFiles/app.css';

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
        <Navbar/>
          <Switch>
            <Route exact path="/" component={ Landing }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/register" component={ Register }/>
            <Route exact path="/map" component={ Map }/>
            <Route exact path="/add-map-post" component={ AddMapPost }/>
            <Route exact path="/user-profile" component={ UserProfile }/>
            <Route exact path="/settings" component={ Settings }/>
            <Route exact path="/change-password" component={ ChangePassword }/>
            <Route exact path="/delete-user" component={ DeleteUserAccount }/>
            <Route exact path="/task/:task_id" component={ SingleTaskPage }/>
            <Route exact path="/user/:user_id" component={ SingleUser }/>
            <Route component={ ErrorPage }/>
          </Switch>
        <Footer/>
      </Router>
    </Provider>
  )
}

export default App