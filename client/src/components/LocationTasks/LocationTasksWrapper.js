import React from 'react';
import LocationTask from './LocationTask'

const LocationTasksWrapper = ({ tasks,auth }) =>
    tasks !== null && tasks !== [] && tasks !== {} && tasks !== {} && auth.user !== null &&
    tasks.map(task => <LocationTask task={task} key={task._id}/>)

export default LocationTasksWrapper
