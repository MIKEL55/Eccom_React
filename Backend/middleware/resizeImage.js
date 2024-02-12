const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const resizeImage = async (req,res,next) => {
    if(req.file) 
    {
    const { filename: image } = req.file;
    
    try {
        console.log(req.file.path)
        await sharp(req.file.path)
        .resize({with:300, height:300}) //max width = 800 or height = 600
        .toFile(path.resolve(req.file.destination,'resized',image)); //upload to /upload folder
        fs.unlinkSync(req.file.path)
    } catch (error) {
        console.log(error);
    }
    next();
    }
    else{
        next();
    }
  }

  module.exports = resizeImage;