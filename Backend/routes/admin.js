
const express = require('express');

const uploadFile = require("../middleware/upload");

const {adminproductList,adminupdateProduct,admininsertProduct,admindeleteProduct, adminimportexcelProduct} = require('../controller/adminController');

const imageResize = require('../middleware/resizeImage');

const fileerrorhandler = require('../middleware/fileerrorhandler')

const router = express.Router();

const  importExcel = require("../middleware/importexcel")




router.get('/products',adminproductList)

router.post('/product/update',uploadFile.single('product_image'),fileerrorhandler,imageResize,adminupdateProduct)

router.post('/product/add',uploadFile.single('product_image'),imageResize,admininsertProduct)

router.post('/product/delete/:id',admindeleteProduct)


router.post('/product/import',importExcel.single('product_excel'),fileerrorhandler,adminimportexcelProduct)


module.exports = router