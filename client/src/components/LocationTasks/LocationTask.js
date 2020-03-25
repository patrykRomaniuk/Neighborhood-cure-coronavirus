import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { deleteTaskByID } from '../../actions/tasks/deleteActions/deleteTaskByID';
import { connect } from 'react-redux';
import howManyDaysPassedInHours from '../../functions/howManyDaysPassedInHours';

const LocationTask = ({ task, deleteTaskByID }) => {

    if(howManyDaysPassedInHours(task.createdAt) >= 72){
        deleteTaskByID(task._id);
    }

    return (
        <div className="task-wrapper">
            <h2>Description:</h2>
            <p className="task-date">Created at <Moment format="YYYY-MM-DD HH:mm">{ task.createdAt }</Moment></p>
            <p className="descripton">
                {task.description}
            </p>
            <h4>phone: {task.phone}</h4>
            <h4>address: { task.address }</h4>
            <div className="check-task">
                <Link to={`/task/${task._id}`}>
                    Check task
                </Link>
            </div>
        </div>
    )
}

export default connect(null, { deleteTaskByID })(LocationTask);
