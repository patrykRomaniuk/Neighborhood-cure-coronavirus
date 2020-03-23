const User = require('../../../schemas/User');

module.exports.getUserByID = async(req,res) => {
    try {
        const user = await User.findById(req.params.user_id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}