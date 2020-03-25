const Task = require('../../../schemas/Task');

module.exports.deleteTaskByID = async(req,res) => {
    try {
        const taskIdToRemove = req.params.task_id;
        let task = await Task.findById(taskIdToRemove);
        if(req.user.id.toString() === task.user.toString()){
            await Task.findByIdAndDelete(taskIdToRemove);
            const tasks = await Task.find();
            res.json(tasks);
        } else res.json("Couldn't find task");
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}