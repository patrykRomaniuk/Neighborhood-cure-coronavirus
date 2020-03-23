import React from 'react';
import { connect } from 'react-redux';
import { Marker } from 'react-map-gl';
import { changeIsSelected,getTaskByID ,deleteTaskByID } from '../../actions/tasks';
import howManyDaysPassedInHours from '../../functions/howManyDaysPassedInHours';

const Task = ({ task, setSelectedTask }) => {

    if(howManyDaysPassedInHours(task.createdAt) >= 72){
        deleteTaskByID(task._id);
    }

    return (
        <div>
            <Marker key={ task._id } latitude={task.location.coordinates[1]} longitude={task.location.coordinates[0]}>
                <i 
                className="fas fa-hands-helping"
                onClick={e => {
                    e.preventDefault();
                    setSelectedTask(task);
                }}></i>
            </Marker>
        </div>
    )
}

const mapStateToProps = state => ({
    taskReducer: state.taskReducer
})

export default connect(mapStateToProps, { changeIsSelected,getTaskByID })(Task);
