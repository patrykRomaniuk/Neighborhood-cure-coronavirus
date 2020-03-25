const User = require('../../../schemas/User');
const gravatar = require('gravatar');
const config = require('config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports.registerUser = async(req,res) => {
    try {
        let { name,lastName,address,age,zipCode,email,password,phone,country,city,date } = req.body;
        let user = await User.findOne({ email });
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({ errors: errors.array() });
        }

        if(user){
            return res.status(401).json("There is already user with this e-mail");
        }

        const avatar = gravatar.url(email,{
            r: 'pg',
            d: 'mm',
            s: '200'
        });

        const location = {
            address,
            city,
            country,
            zipCode,
        }
        
        user = new User({
            name,
            lastName,
            age,
            email,
            password,
            phone,
            date,
            location,
            avatar
        });

        const salt = await bcryptjs.genSalt(10);

        user.password = await bcryptjs.hash(password,salt);

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

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..." });
    }
}