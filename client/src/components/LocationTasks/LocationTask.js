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
            <h4 className="descripton">
                {task.description}
            </h4>
            <h4>Phone: {task.phone}</h4>
            <h4>Address: { task.address }</h4>
            <div className="check-task">
                <h4><Link to={`/task/${task._id}`}>Check task</Link></h4>
            </div>
        </div>
    )
}

export default connect(null, { deleteTaskByID })(LocationTask);
