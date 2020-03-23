import React, { useState } from 'react';
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';

const Login = ({ auth: { isAuthenticated },loginUser }) => {

    if(isAuthenticated){
        alert("You are logged in!");
        return <Redirect to="/user-profile"/>
    }

    let [formData,setFormData] = useState({
        email: '',
        password: ''
    })

    const { email,password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        if(email !== '' && password !== '')
        loginUser(formData);
        else 
            return alert('Email or password are invalid');
    }

    return (
        <section className="login-page-section">
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
                        <input value={ password } name="password" type="text" onChange={(e) => onChange(e)} onKeyPress={(e) => { if(e.key === 'Enter') onSubmit(e) }}/>
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
