const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    firstname : {
        type : String,
    },
    lastname : {
        type :String,
    },
    username : {
        type :String,
    },
    role: {
        type : Number,
    }

})


userSchema.statics.signup = async function(email,password,firstname,lastname,username)
{
    if(!email || !password || !firstname || !lastname || !username) {
        throw Error('Empty Field')
    }
    if(!validator.isEmail(email))
    {
        throw Error('Not a valid email address')
    }
   
    const exists = await this.findOne({email})

    if(exists)
    {
        throw Error('Email already Taken')
    }

    // if(!validator.isStrongPassword(password,))
    // {
    //     throw Error('Weak Password')
    // }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email,password:hash,firstname,lastname,username})

    return user
}



userSchema.statics.login = async function(email,password)
{
    if(!email || !password) {
        throw Error('Empty Field')
    }
    if(!validator.isEmail(email))
    {
        throw Error('Not a valid email address')
    }
    const user = await this.findOne({email})

    if(!user)
    {
        throw Error('Email not registered')
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match)
    {
        throw Error('Incorrect  Password')
    }

    return user
}

userSchema.statics.refresh = async function(email)
{
    const user = await this.findOne({email})

    if(!user)
    {
        throw Error('Incorrect Email')
    }

    return user
}

module.exports = mongoose.model('User',userSchema);