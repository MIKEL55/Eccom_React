const multer = require("multer");


let excelStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,'./uploads/excel');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    },
  });

  
  let importExcel = multer({
    storage: excelStorage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "application/vnd.ms-excel" || file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        cb(null, true);
      } else {
        req.fileValidationError = 'Only .xls and .xlsx format allowed!'
        cb(null,false,req.fileValidationError);
      }
    }
  })

module.exports = importExcel;