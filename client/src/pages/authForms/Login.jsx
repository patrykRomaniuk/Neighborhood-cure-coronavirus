import React, { useState } from 'react';
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth/loginUser';
import { Helmet } from 'react-helmet';

const Login = ({ auth: { isAuthenticated },loginUser }) => {

    if(isAuthenticated){
        alert("You are logged in!");
        return <Redirect to="/user-profile"/>
    }

    let [formData,setFormData] = useState({
        email: '',
        password: '',
        isShowPassword: false
    })

    const { email,password,isShowPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });
    }

    const changeShowingPassword = () => {
        setFormData({ ...formData, isShowPassword: !isShowPassword })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === '')
            return alert("Password or email is empty");
        loginUser(formData);
    }

    return (
        <section className="login-page-section">

            <Helmet>
                <meta charSet="utf-8" />
                <title>NeighborlyHelp - Login</title>
                <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
                <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, login, login neighborly, neighborly helps"/>
                <meta name="author" content="Patryk Romaniuk"/> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>

            <header>
                <h1>Sign In</h1>
                <p>or if you don't have an account, <Link to="/register">create an account</Link></p>
            </header>

            <div className="divide-section-50-50">

                <div className="inputs-wrapper">
                    <div className="input">
                        <label>Email</label>
                        <input value={ email } name="email" type="text" onChange={(e) => onChange(e)} onKeyPress={(e) => { if(e.key === 'Enter') onSubmit(e) }}/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input 
                        value={ password } 
                        name="password"
                        type={ isShowPassword ? "text" : "password"} 
                        onChange={(e) => onChange(e)} 
                        onKeyPress={(e) => { if(e.key === 'Enter') onSubmit(e) }}
                        />
                    </div>
                    <div className="show-password-section" onClick={() => changeShowingPassword()}>
                        <i className={isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>{'   '}
                        <span>{ isShowPassword ? "Hide password" : "Show password" }</span>
                    </div>
                    <div className="login-button" onClick={(e) => onSubmit(e)} type="submit">
                        Submit
                    </div>
                </div>

                <div className="login-slogan">
                    <h1>Take Care Of Your Neighbors</h1>
                </div>

            </div>

        </section>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
