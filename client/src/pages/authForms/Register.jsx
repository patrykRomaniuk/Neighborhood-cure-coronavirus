import React, { useState } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth/registerUser';
import { Redirect, Link } from 'react-router-dom';

const Register = ({ auth: { isAuthenticated },registerUser }) => {

    if(isAuthenticated){
        alert("You are logged in!");
        return <Redirect to="/user-profile"/>
    }

    let [formData,setFormData] = useState({
        name: '',
        lastName: '',
        address: '',
        zipCode: '',
        age: '',
        password: '',
        email: '',
        phone: '',
        city: '',
        country: ''
    });

    let { name,lastName,address,zipCode,age,password,email,phone,city,country } = formData;

    const onChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        registerUser(formData,"register");
    }

    const checkAge = e => {
        if(e.target.value <= 0)
            return alert("You are not allowed to do that");
        if(e.target.value >= 122)
            return alert("According to this criterion, the longest human lifespan is that of Jeanne Calment of France (1875–1997), who lived to age 122 years, 164 days. She supposedly met Vincent van Gogh when she was 12 or 13. She received news media attention in 1985, after turning 110.")
            onChange(e)
    }

    return (
            <div className="register-page-wrapper">
                <header>
                    <h1>Register</h1>
                    <p>or if you have an account, <Link to="/login">log in</Link></p>
                </header>

                <div className="register-inputs-wrapper">
                    <div className="input first-input">
                        <label>Name</label>
                        <input type="text" name="name" value={ name } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input second-input">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={ lastName } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input third-input">
                        <label>Country</label>
                        <input type="country" name="country" value={ country } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input fourth-input">
                        <label>City</label>
                        <input type="text" name="city" value={ city } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input fifth-input">
                        <label>Address</label>
                        <input type="text" name="address" value={ address } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input sixth-input"> 
                        <label>Zip code</label>
                        <input type="text" name="zipCode" value={ zipCode } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input seventh-input">
                        <label>Age</label>
                        <input type="number" name="age" value={ age } onChange={(e) => checkAge(e) }/>
                    </div>
                    <div className="input tenth-input">
                        <label>Phone</label>
                        <input type="tel" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxLength="12"  name="phone" value={ phone } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input eight-input">
                        <label>E-mail</label>
                        <input type="text" name="email" value={ email } onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="input nineth-input">
                        <label>Password</label>
                        <input type="password" name="password" value={ password } onChange={(e) => onChange(e)}/>
                    </div>

                </div>

                <div className="register-button" onClick={(e) => onSubmit(e)}>
                    Register
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Register);
