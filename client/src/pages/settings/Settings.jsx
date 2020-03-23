import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <div className="setings-page-wrapper">
            <header>
                <h1>Settings</h1>
            </header>
            <div className="links-wrapper">
                <div className="settings-link"><Link to="/change-password">Change password</Link></div>
                <div className="settings-link"><Link to="/delete-user">Delete account</Link></div>
            </div>
        </div>
    )
}

export default Settings
