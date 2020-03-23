import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTaskByID } from '../actions/tasks';
import Moment from 'react-moment';

const SingleTaskPage = ({ taskReducer: { task },auth, getTaskByID, match }) => {

    useEffect(() => {
        if(match.params.task_id)
            getTaskByID(match.params.task_id);
    },[])

    return ( task !== null && task !== {} && task !== undefined && task !== [] ) ? (
            <div className="single-task-wrapper">
                <header>
                    <h1>Task added by</h1>
                    <p><Moment format="YYYY-MM-DD HH:mm">{ task.createdAt }</Moment></p>
                </header>
                <div className="task-description">
                    <h1>Description:</h1>
                    <p>{ task.description }</p>
                </div>
                <div className="task-contact-section">
                    <div className="task-data">
                        { auth.isAuthenticated ? (<span>Phone: { task.phone }</span>) : (<span>Phone: You have to be logged in to see</span>)}
                        { auth.isAuthenticated ? (<span>City: { task.city }</span>) : (<span>City: You have to be logged in to see</span>)}
                        { auth.isAuthenticated ? (<span>Address: { task.address }</span>) : (<span>Address: You have to be logged in to see</span>)}
                    </div>
                    <div className="task-btn">
                        <Link to={`/user/${task.user}`}>
                            Check user profile
                        </Link>
                    </div>
                </div>
            </div>
        ) : (
            <div className="task-rejection">
                There is no task like that
            </div>
        )
}

const mapStateToProps = state => ({
    taskReducer: state.taskReducer,
    auth: state.auth
});

export default connect(mapStateToProps, { getTaskByID })(SingleTaskPage);
