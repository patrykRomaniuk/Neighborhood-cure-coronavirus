import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error-page-wrapper">
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
