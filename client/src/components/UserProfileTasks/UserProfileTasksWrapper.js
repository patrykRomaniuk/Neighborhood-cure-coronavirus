import React from 'react';
import UserProfileTask from './UserProfileTask';

const UserProfileTasksWrapper = ({ userTasks }) =>
    userTasks !== null & userTasks !== undefined && userTasks !== [] && userTasks !== {} &&
    userTasks.map(userTask => <UserProfileTask task={userTask} key={userTask._id}/>)

export default UserProfileTasksWrapper
