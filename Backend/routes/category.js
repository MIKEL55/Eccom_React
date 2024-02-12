const express = require('express');
const {categoryList} = require('../controller/categoryController')

const auth = require('../middleware/auth')

const router = express.Router();

//router.use(auth);

router.get('/categorylist',categoryList)

module.exports = router