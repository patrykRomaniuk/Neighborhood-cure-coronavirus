import React, { useEffect } from 'react';
import { getUserByID } from '../actions/auth/getUserByID';
import { connect } from 'react-redux';
import Moment from 'react-moment';
 
const SingleUser = ({ match,getUserByID,auth }) => {
    useEffect(() => {
        getUserByID(match.params.user_id);
    },[])
    return (auth.singleUser !== null && auth.singleUser !== {} && auth.singleUser !== undefined && auth.singleUser !== [])&& (
        <div className="single-user-page-wrapper user-profile-page-wrapper">
            <div className="image-date-section">
                <img src={auth.singleUser.avatar} alt=""/>
                <p>Joined at: <Moment format="DD.MM.YYYY">{ auth.singleUser.date }</Moment></p>
            </div>
            <div className="basic-user-data">
                <h1>{ auth.singleUser.name } { auth.singleUser.lastName }</h1>
            </div>
            <div className="contact-user-data">
                <p>{ auth.singleUser.age } years old</p>
                <p>Phone: { auth.singleUser.phone }</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { getUserByID })(SingleUser);
