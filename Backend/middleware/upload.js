const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

const domain ="http://localhost:5000/"

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'./uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  },
});

let uploadFile = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      req.fileValidationError = 'Only .png, .jpg and .jpeg format allowed!'
      cb(null, false,req.fileValidationError);
    }
  }
})

// let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFile;
