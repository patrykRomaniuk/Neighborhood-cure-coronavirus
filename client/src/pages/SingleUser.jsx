import React, { useEffect } from 'react';
import { getUserByID } from '../actions/auth';
import { connect } from 'react-redux';
 
const SingleUser = ({ match,getUserByID }) => {
    useEffect(() => {
        getUserByID(match.params.user_id);
    },[])
    return (
        <div>
            a
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { getUserByID })(SingleUser);
