const express = require('express');
const {shippingList} = require('../controller/shippingController')

const router = express.Router();


router.get('/shippinglist',shippingList)

module.exports = router