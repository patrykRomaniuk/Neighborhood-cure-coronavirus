const { check } = require('express-validator');

module.exports.loginValidations =  [
    check('email','Type proper e-mail').isEmail(),
    check('password','Type proper password').isLength({ min: 6 })
];

module.exports.registerValidations = [
    [
        check('name', 'Please type proper name').not().isEmpty(),
        check('lastName', 'Please type proper last name').not().isEmpty(),
        check('address', 'Please type proper address').not().isEmpty(),
        check('age', 'Please type proper name').isNumeric(),
        check('password', 'Password has to have at least 3 letters').isLength({ min: 3 }),
        check('email','Type proper e-mail').isEmail(),
        check('country', 'Country is required').not().isEmpty(),
        check('city', 'City is required').not().isEmpty()
    ]
];

module.exports.putDescriptionUser = [check('description', 'Description is required').not().isEmpty()]