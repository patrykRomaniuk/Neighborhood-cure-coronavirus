const User = require('../../../schemas/User');

module.exports.removeDescription = async(req,res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');

        if(!user){
            return res.status(404).json({ msg: "You are not allowed to do that" });
        }

        user.description = undefined;

        await user.save();

        res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}