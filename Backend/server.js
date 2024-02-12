const express = require('express')

const mongoose = require("mongoose");

require("dotenv").config();

var cors = require('cors')



var cookieParser = require('cookie-parser')

//------------------Routes Import------------------//

const useRoutes = require('./routes/user')

const productRoute = require('./routes/product')

const adminRoute = require('./routes/admin')

const categoryRoute = require('./routes/category')

const shippingRoute = require('./routes/shipping')

//------------------Routes Import------------------//


const app = express()


const whitelist = ['http://localhost:5000','http://localhost:3000'];

const corsOption = {
    credentials: true,
    origin: (origin,cb) => {
        if(whitelist.indexOf(origin) !== -1 || !origin)
        {
            cb(null,true)
        }
        else
        {
            cb(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus:200
}





app.use(cors(corsOption));


app.use(express.json())
app.use(cookieParser())

app.use('/uploads', express.static('uploads'));



const mongoDB = "mongodb://localhost:27017/ecom";




app.use((req,res,next) => {
    
    console.log(req.path,req.method)
    next()
})

app.use('/api/user',useRoutes)

app.use('/api/category',productRoute)

app.use('/api/shipping',shippingRoute)

app.use('/api/products',productRoute)

app.use('/api/admin',adminRoute)

app.use('/api/dropdown',categoryRoute)



mongoose.connect(mongoDB).then(()=>{
    app.listen(5000,()=>{
        
        console.log('Connected db')
    })
})