
const jwt = require('jsonwebtoken')


const auth = (req,res,next) => {
 
        let authHeader = req.headers.authorization || req.headers.Authorization
        if(!authHeader?.startsWith('Bearer ')) {
            res.status(401).json({message: "Unauthorized User"})
        }
        
        const token = authHeader.split(' ')[1]
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if (err) return res.status(403).json({message: "Forbidden"})
            req.email = decoded.email;
            next();
        })
}

module.exports = auth;