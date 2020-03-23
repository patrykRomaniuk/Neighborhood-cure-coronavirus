import React from 'react';
import Task from './Task';

const TaskWrapper = ({ tasks,setSelectedTask }) => 
    tasks !== null &&
    tasks !== [] &&
    tasks !== {} &&
    tasks !== undefined &&
    tasks.map(task => <Task task={task} key={task._id} setSelectedTask={setSelectedTask}/>)

export default TaskWrapper;