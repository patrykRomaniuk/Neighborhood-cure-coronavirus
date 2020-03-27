import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Settings = () => {
    return (
        <div className="setings-page-wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>NeighborlyHelp - Settings</title>
                <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
                <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, settings"/>
                <meta name="author" content="Patryk Romaniuk"/> 
                <meta httpEquiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self';font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
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
