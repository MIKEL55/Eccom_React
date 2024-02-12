const productModel = require('../models/productModel')

const resizeImage = require('../middleware/resizeImage')

const domain_name = "http://localhost:5000/";

const fs = require('fs');
const path = require('path')
const excel = require('exceljs');
const workbook = new excel.Workbook();


const adminproductList = async(req,res) => {
    productModel.find(function (err, product) {
        res.json(product);
        });
}

const adminupdateProduct = async(req,res) => {
    const {_id,title,description,price,image,category} = JSON.parse(req.body.userData)
    const size = JSON.parse(req.body.sizeData)
    const img= req.file ? domain_name+req.file.path.replace("uploads\\","uploads\\resized\\") : image

    let previmagepath= await getproductbyId(_id);

    const previmage = previmagepath.image.split("http://localhost:5000").pop();
    let directory = path.join(__dirname,'../')

    fs.unlink(directory+previmage,(err) => {
        console.log(err)
    });
    try{
        const response = await productModel.updateOne({"_id":_id},{$set : {"title":title,"description":description,"price":price,"image":img,"category":category,"size":size}});
        res.json(response);
        
    }
    catch(err){
        res.json(err)
    }
}

// const admininsertProduct = async(req,res) =>{
//     const {title,description,price,category} = JSON.parse(req.body.userData)
//     const image = req.file ? req.file.path : " "
//     try {
//         const response = await productModel.create({"title":title,"description":description,"image":image,"price":price,"category":category})
//         res.json(response);
//     }
//     catch(err){
//         res.json(err)
//     }
// }

const admininsertProduct = async(req,res) =>{
    const {title,description,price,category} = JSON.parse(req.body.userData)
    const size = JSON.parse(req.body.sizeData)
    const image = req.file ? domain_name+req.file.path.replace("uploads\\","uploads\\resized\\") : " ";
    try {
        const response = await productModel.create({"title":title,"description":description,"image":image,"price":price,"category":category,"size":size})
        res.json(response);
    }
    catch(err){
        res.status(500).json({message:'All fields required'})
    }
}




const admindeleteProduct =  async(req,res) =>{
    var id = req.params.id;
    try {
        const response = await productModel.deleteOne({"_id":id})
        res.json(response);
    }
    catch(err){
        res.json(err)
    }
}

// const getprevPath = async(id) => {
//     try {
//         const response = await productModel.findById(id);
//         return response.image;

//     }
//     catch(err) {
//         return null;
//     }
// }

const adminimportexcelProduct = async(req,res) => {

    await workbook.xlsx.readFile(req.file.path);
    let jsonData = [];
    let key = ['','title','description','price','category','size']
    workbook.worksheets.forEach((sheet) => {
        let firstRow = sheet.getRow(1);
        if (!firstRow.cellCount) return;
        let keys = firstRow.values;
        console.log(keys);
        sheet.eachRow((row, rowNumber) => {
            if (rowNumber == 1) return;
            let values = row.values
            let obj = {};
            for (let i = 1; i < keys.length; i ++) {
                if (key[i] === 'size') {
                    values[i] = [values[i].toString()]
                }
                obj[key[i]] = values[i];
            }
            obj['image'] = ' ';

            jsonData.push(obj);
    })
})
    if(jsonData) {
        try {
            const response = await productModel.insertMany(jsonData,{ ordered: true });
            res.json(response);
        }
        catch(err)
        {
            res.status(401).json(err)
        }
    }
    else{
        res.status(500).json({message:'File Invalid'});
    }
    
    
}



const getproductbyId = async (id) => {
    try
    {
        const response = await productModel.findById(id);
        return response;
    }
    catch(err)
    {
        return null;
    }
    
}



module.exports = {adminproductList,adminupdateProduct,admininsertProduct,admindeleteProduct,adminimportexcelProduct}