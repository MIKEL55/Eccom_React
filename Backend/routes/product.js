const express = require('express');

const {productInfo,productList} = require('../controller/productController')


const router = express.Router();


router.get('/:id',productInfo)

router.get('/products/:cat',productList)





module.exports = router