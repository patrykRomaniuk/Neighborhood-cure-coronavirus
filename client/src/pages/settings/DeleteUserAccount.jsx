import React from 'react';
import { connect } from 'react-redux';
import { removeUserAccount } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

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