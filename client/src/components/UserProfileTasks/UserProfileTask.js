import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTaskByID } from '../../actions/tasks/deleteActions/deleteTaskByID';
import howManyDaysPassedInHours from '../../functions/howManyDaysPassedInHours';

const UserProfileTask = ({ task,deleteTaskByID }) => {

    if(howManyDaysPassedInHours(task.createdAt) >= 72){
        deleteTaskByID(task._id);
    }

    return (
        <div className="user-task">
            <div className="description-section">
                <h1>Description</h1>
                <p>{task.description}</p>
            </div>
            <div className="user-task-buttons">
                <div className="user-task-delete-btn" onClick={() => {
                    deleteTaskByID(task._id);
                }}>
                    Delete task
                </div>
                <div className="user-task-edit-btn">
                    <Link to={`/edit-task/${task._id}`}>
                        Edit task
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deleteTaskByID })(UserProfileTask);
