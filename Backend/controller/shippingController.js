const shippingModel = require('../models/shippingModel')

const shippingList = async(req,res) => {
    try{
        const response= await shippingModel.find({})
        res.json(response)
    }
    catch(err)
    {
        res.json(err)
    }
}

module.exports = {shippingList}