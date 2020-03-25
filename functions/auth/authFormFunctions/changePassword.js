const User = require('../../../schemas/User');
const bcryptjs = require('bcryptjs');

module.exports.changePassword = async(req,res) => {
    try {
        const { passwordForm,newPassword } = req.body;
        let user = await User.findById(req.user.id);

        if(!await bcryptjs.compare(passwordForm,user.password))
            return res.status(401).json("Wrong password");

        const salt = await bcryptjs.genSalt(10);
        const hashedNewPassword = await bcryptjs.hash(newPassword,salt);
        
        user.password = hashedNewPassword;

        await user.save();

        res.json('Password has changed');
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}