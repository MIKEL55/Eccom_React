const express = require('express');

const {loginUser,signupUser,refreshUser,logoutUser} = require('../controller/userController')


const router = express.Router();


router.post('/login',loginUser)
router.post('/signup',signupUser)

router.get('/login/refresh',refreshUser)

router.post('/logout',logoutUser)

module.exports = router