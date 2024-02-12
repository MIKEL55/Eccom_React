const productModel = require('../models/productModel')


const productInfo = async (req,res) => {
    var id = req.params.id;

    productModel.findById(id, function (err, product) {
        res.json(product);
        });
}


const productList = async(req,res) => {
    var cat = req.params.cat;
    var query = {category : cat}
    productModel.find(query,function (err, product) {
        res.json(product);
        });

}




module.exports = {productInfo,productList}