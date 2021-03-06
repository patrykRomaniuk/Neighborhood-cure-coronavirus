import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth/loadUser';
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
import EditTask from './pages/EditTask';
import './styles/styleFiles/app.css';
import Author from './components/Author';
import { Helmet } from 'react-helmet';

if(localStorage.getItem('token')){
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  },[])

  return (
    <Provider store={ store }>
        <Helmet>
            <meta charSet="utf-8" />
            <title>NeighborlyHelp</title>
            <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
            <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, neighborly helps"/>
            <meta name="author" content="Patryk Romaniuk"/> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
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
            <Route exact path="/edit-task/:task_id" component={ EditTask }/>
            <Route component={ ErrorPage }/>
          </Switch>
        <Author/>
        <Footer/>
      </Router>
    </Provider>
  )
}

export default App