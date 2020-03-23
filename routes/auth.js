const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getUser } = require('../functions/auth/authGetRequests/getUser');
const { getUserByID } = require('../functions/auth/authGetRequests/getUserByID');
const { registerUser } = require('../functions/auth/authFormFunctions/register');
const { loginUser } = require('../functions/auth/authFormFunctions/login');
const { changePassword } = require('../functions/auth/authFormFunctions/changePassword');
const { putDescription } = require('../functions/auth/authFormFunctions/putDescription');
const { removeDescription } = require('../functions/auth/authDeleteFunctions/removeDescription');
const { deleteUser } = require('../functions/auth/authDeleteFunctions/deleteUser');
const { loginValidations,registerValidations,putDescriptionUser } = require('../middleware/expressValidations');

router.get('/user', auth, getUser);

router.route('/user/:user_id').get(getUserByID);

router.post('/register',registerValidations,registerUser);

router.post('/login',loginValidations,loginUser);

router.put('/changePassword',auth,changePassword);

router.put('/put_description',putDescriptionUser,auth,putDescription);

router.delete('/remove_description',auth,removeDescription);

router.delete('/deleteUser',auth,deleteUser);

module.exports = router;