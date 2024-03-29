const express = require('express');
const signUpController = require('../controllers/signUp');
const router = express.Router();


router.get('/', signUpController.getSignUpPage);
router.post('/register', signUpController.postSignUpUser);



module.exports = router;