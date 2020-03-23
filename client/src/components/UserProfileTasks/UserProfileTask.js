import React from 'react';
import { connect } from 'react-redux';
import { deleteTaskByID } from '../../actions/tasks';
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
                <div className="user-task-edit-btn" onClick={() => {
                    deleteTaskByID(task._id);
                }}>
                    Edit task
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deleteTaskByID })(UserProfileTask);
