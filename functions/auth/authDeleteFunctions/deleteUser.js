const User = require('../../../schemas/User');

module.exports.deleteUser = async(req,res) => {
    try {
        await User.findByIdAndRemove(req.user.id);
        res.json('User is removed');
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}