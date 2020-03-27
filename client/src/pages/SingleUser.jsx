import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserByID } from '../actions/auth/getUserByID';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Moment from 'react-moment';
 
const SingleUser = ({ match,getUserByID,auth }) => {
    useEffect(() => {
        getUserByID(match.params.user_id);
    },[])
    return (auth.singleUser !== null && auth.singleUser !== {} && auth.singleUser !== undefined && auth.singleUser !== []) && (
        <div className="single-user-page-wrapper user-profile-page-wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ `${auth.singleUser.name} ${ auth.singleUser.lastName }` }</title>
                <meta name="description" content={auth.singleUser.description}/>
                <meta httpEquiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self';font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'"/>
            </Helmet>
            <div className="image-date-section">
                <img src={auth.singleUser.avatar} alt=""/>
                <p>Joined at: <Moment format="DD.MM.YYYY">{ auth.singleUser.date }</Moment></p>
            </div>
            <div className="basic-user-data">
                <h1>{ auth.singleUser.name } { auth.singleUser.lastName }</h1>
            </div>
            <div className="contact-user-data">
                { auth.user ?  (<p>{ auth.singleUser.age } years old</p>) : (<p>Age: You have to be logged in to see, <Link to="/login">log in</Link></p>)}
                { auth.user ?  (<p>Phone: { auth.singleUser.phone }</p>) : (<p>Phone: You have to be logged in to see, <Link to="/login">log in</Link></p>)}
                { auth.user ?  (<p>Email: { auth.singleUser.email }</p>) : (<p>Email: You have to be logged in to see, <Link to="/login">log in</Link></p>)}
            </div>

            <div className="description-section">
                <div className="user-has-description">
                    <div className="description">
                            {
                                auth.singleUser.description ? 
                                (<p>{auth.singleUser.description}</p>) : 
                                (<p>This user doesn't have description</p>)
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { getUserByID })(SingleUser);
