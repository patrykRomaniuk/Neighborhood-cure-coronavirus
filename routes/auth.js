const express = require('express');
const { check,validationResult } = require('express-validator');
const User = require('../schemas/User');
const gravatar = require('gravatar');
const config = require('config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post(
    '/register',
    [
        check('name', 'Please type proper name').not().isEmpty(),
        check('lastName', 'Please type proper last name').not().isEmpty(),
        check('address', 'Please type proper address').not().isEmpty(),
        check('zipCode', 'Please type proper zip-code').not().isEmpty(),
        check('age', 'Please type proper name').isNumeric(),
        check('reason', 'Error with reason').not().isEmpty(),
        check('password', 'Password has to have at least 6 letters').isLength({ min: 6 }),
        check('email','Type proper e-mail').isEmail(),
        check('phone','Please type proper phone number').not().isEmpty()
    ],
    async(req,res) => {
        try {
            let { name,lastName,address,age,zipCode,email,password,reason,phone/*,avatar*/ } = req.body;
            let user = await User.findOne({ email });
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(500).json({ errors: errors.array() });
            }

            if(user){
                return res.status(401).json({ msg: "There is already user with this e-mail" });
            }

          //  gravatar.url()
            
            user = new User({
                name,
                lastName,
                address,
                age,
                zipCode,
                email,
                password,
                reason,
                phone
              //  avatar
            });

            const salt = await bcryptjs.genSalt(15);

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
);

router.post(
    '/login',
    [
        check('email','Type proper e-mail').isEmail(),
        check('password','Type proper password').isLength({ min: 6 })
    ],
    async(req,res) => {
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
);

module.exports = router;