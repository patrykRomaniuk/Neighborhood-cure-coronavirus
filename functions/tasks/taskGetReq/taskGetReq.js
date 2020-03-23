const Task = require('../../../schemas/Task');

module.exports.getAllTasks = async(req,res) => {
    try {
        const tasks = await Task.find();
        res.json({ success: true, data: tasks });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server errror..." });
    }
}

module.exports.getUserTasks = async(req,res) => {
    try {
        const tasks = await Task.find();
        res.json({ success: true, data: tasks });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server errror..." });
    }
}

module.exports.getTaskByID = async(req,res) => {
    try {
        let task = await Task.findById(req.params.task_id);
        res.json(task)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Errror..." });
    }
}

module.exports.getTasksInYourCity = async(req,res) => {
    try {
        let { userLocation } = req.body;
        let allTasks = await Task.find();
        let locationTasks = allTasks.filter(task => task.city === userLocation);
        res.json(locationTasks);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Errror..." });
    }
}