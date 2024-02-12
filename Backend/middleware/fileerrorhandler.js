

const fileerrorhandler = async (req,res,next) => {
    const fileValidationError = req.fileValidationError ? req.fileValidationError : null

    if(fileValidationError)
    {
        res.status(500).json({message: fileValidationError})
    }
    else{
        next()
    }

}

module.exports = fileerrorhandler;