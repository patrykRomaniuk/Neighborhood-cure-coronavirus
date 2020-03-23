const User = require('../../../schemas/User');
const { validationResult } = require('express-validator');

module.exports.putDescription = async(req,res) => {
    try {
        const { description } = req.body;
        const errors = validationResult(req);
        let user = await User.findById(req.user.id).select('-password');
        if(!errors.isEmpty()){
            return res.status(401).json({ errors: errors.array() });
        }
        if(!user){
            return res.status(404).json({ msg: "You are not allowed to do that" });
        }

        user.description = description;

        await user.save();

        res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}