const Task = require('../../../schemas/Task');

module.exports.changeTaskDescription = async (req,res) => {
    try {
        const taskIdToChangeDescription = req.params.task_id;
        const { newDescription } = req.body;
        console.log(taskIdToChangeDescription)
        let userTask = await Task.findById(taskIdToChangeDescription);
        if(req.user.id.toString() === userTask.user.toString()){
            userTask.description = newDescription;
            await userTask.save();
            res.json("Changed task description");
        } else return res.json("Couldn't find this task");
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}