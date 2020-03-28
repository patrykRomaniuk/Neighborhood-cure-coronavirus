import React from 'react';
import { connect } from 'react-redux';
import { removeUserAccount } from '../../actions/auth/removeUserAccount';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DeleteUserAccount = ({ removeUserAccount, auth }) => {

    if(!auth.isAuthenticated){
        alert("You are not logged in!");
        return <Redirect to="/login"/>
    }

    const onSubmit = () => {
        if(confirm("Are you sure about that? It can't be undone")){
            removeUserAccount();
        }
    }

    return (
        <div className="delete-user-account">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Delete your account</title>
                <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
                <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, delete account, neighborly helps"/>
                <meta name="author" content="Patryk Romaniuk"/> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
            <header>
                <h1>Delete your account</h1>
            </header>
            <div className="confirm-wrapper">
                <div className="confirm-button" onClick={() => onSubmit()}>
                    Yes, I want to delete my account
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { removeUserAccount })(DeleteUserAccount);