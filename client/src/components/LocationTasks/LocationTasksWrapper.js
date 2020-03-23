import React from 'react';
import LocationTask from './LocationTask'

const LocationTasksWrapper = ({ tasks }) =>
    tasks !== null && tasks !== [] && tasks !== {} && tasks !== {} &&
    tasks.map(task => <LocationTask task={task}/>)

export default LocationTasksWrapper
