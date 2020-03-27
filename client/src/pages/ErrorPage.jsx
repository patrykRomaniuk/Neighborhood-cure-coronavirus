import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div className="error-page-wrapper">
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Neighborly Help - Error Page</title>
                    <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
                    <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, error page"/>
                    <meta name="author" content="Patryk Romaniuk"/> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self';font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'"/>
            </Helmet>
            <header>
                <h1>Error 404: Page not found</h1>
            </header>
            <div className="go-black-btn">
                <Link to="/">Go back</Link>
            </div>
        </div>
    )
}

export default ErrorPage
