const User = require('../../../schemas/User');
const config = require('config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports.loginUser = async(req,res) => {
    let { email,password } = req.body;
    let user = await User.findOne({ email });
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(500).json({ errors: errors.array() });
    }

    if(!user){
        return res.status(401).json({ msg: "There is no user with this email" });
    }

   let isMatch = await bcryptjs.compare(password,user.password);
    
    if(!isMatch){
        return res.status(401).json({ msg: "Passwords don't match" });
    }

    await user.save();

    const payload = {
        user: {
            id: user.id
        }
    }

    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err,token) => {
            if(err) throw err;
            res.json({ token });
        }
    )

}