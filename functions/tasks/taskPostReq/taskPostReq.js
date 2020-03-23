const User = require('../../../schemas/User');
const Task = require('../../../schemas/Task');

module.exports.addTask = async(req,res) => {
    try {
        let user = await User.findById({ _id: req.user.id }).select('-password');

        if(!user)
            return res.status(401).json({ msg: "You are not logged in!" });

        req.body = { ...req.body,user: user._id };

        const tasks = await Task.create(req.body);

        return res.json({
            success: true,
            data: tasks
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server errror..." });
    }
}