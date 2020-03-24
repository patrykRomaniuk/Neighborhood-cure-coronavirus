import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changePassword } from '../../actions/auth/changePassword';

const ChangePassword = ({ changePassword }) => {

    let [formData, setFormData] = useState({
        oldPassword1: '',
        oldPassword2: '',
        newPassword: ''
    });

    let { oldPassword1,oldPassword2,newPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });
    }

    const onSubmit = () => {
        if(oldPassword1 !== oldPassword2)
            return alert("Password's don't match");
        changePassword(oldPassword1,newPassword);
    }

    return (
        <div className="change-password-wrapper">
            <header>
                <h1>Change Password</h1>
            </header>
            <div className="inputs-wrapper">
                <div className="input">
                    <label>Type your actual password</label>
                    <input name="oldPassword1" value={ oldPassword1 } onChange={e => onChange(e)} type="text"/>
                </div>
                <div className="input">
                    <label>Type again your actual password</label>
                    <input name="oldPassword2" value={ oldPassword2 } onChange={e => onChange(e)} type="text"/>
                </div>
                <div className="input">
                    <label>Type your new password</label>
                    <input name="newPassword" value={ newPassword } onChange={e => onChange(e)} type="text"/>
                </div>
            </div>
            <div className="change-password-btn" onClick={() => onSubmit()}>
                Change Password
            </div>
        </div>
    )
}

export default connect(null, { changePassword })(ChangePassword);
