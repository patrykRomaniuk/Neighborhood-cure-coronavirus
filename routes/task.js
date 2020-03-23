const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addTask } = require('../functions/tasks/taskPostReq/taskPostReq');
const { getAllTasks,getTaskByID,getUserTasks,getTasksInYourCity } = require('../functions/tasks/taskGetReq/taskGetReq');
const { deleteTaskByID } = require('../functions/tasks/taskDeleteReq/taskDeleteReq');
const { changeTaskDescription } = require('../functions/tasks/taskPutReq/changeTaskDescription');

router.get('/',getAllTasks);

router.get('/taskID/:task_id',getTaskByID);

router.get('/user_tasks',auth,getUserTasks);

router.put('/location_tasks',auth,getTasksInYourCity);

router.put('/changeTaskDescription/:task_id',auth,changeTaskDescription);

router.post('/',auth,addTask);

router.delete('/deleteTaskByID/:task_id',auth,deleteTaskByID);

module.exports = router;