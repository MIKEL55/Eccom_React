const categoryModel = require('../models/categoryModel')

const categoryList = async(req,res) => {
    try{
        const response= await categoryModel.find({})
        res.json(response)
    }
    catch(err)
    {
        res.json(err)
    }
}

module.exports = {categoryList}