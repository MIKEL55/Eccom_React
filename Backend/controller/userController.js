
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (email) =>{
    return jwt.sign({email},process.env.SECRET_KEY,{expiresIn : '30s'})

}

const createRefreshToken = (email) =>{
    return jwt.sign({email},process.env.SECRET_KEY_REFRESH,{expiresIn : '1d'})
}


const loginUser = async (req,res) => {
    const {email,password} = req.body
    try{
        const user = await User.login(email,password)
        const token = createToken(user.email)
        const refreshtoken= createRefreshToken(user.email)

        res.cookie('jwt',refreshtoken,{
            httpOnly: true,
            secure:true,
            sameSite:'None',
            maxAge: 7*24*60*60*1000

        })

        res.status(200).json({email,token})

    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
}


const refreshUser = async (req,res) => {
    const cookies = req.cookies

    if(!cookies?.jwt) return res.status(401).json({message: "Unauthorized"})

    const refreshtoken= cookies.jwt

    jwt.verify(refreshtoken,
        process.env.SECRET_KEY_REFRESH,
        async (err,decode) => {
            if (err) return res.status(401).json({message: "Forbidden"})
            try{
            const user = await User.refresh(decode.email)
            const token = createToken(user._id)
            res.status(200).json({token})
            }
            catch(error)
            {
                res.status(400).json({error: error.message})
            }
        }

        )
}


const logoutUser = async (req,res) => {
    const cookies = req.cookies
    if(!cookies?.jwt) {
        return res.sendStatus(204);
    }
    res.clearCookie('jwt')
    res.json({message : "Cookie Cleared"})

}

const signupUser = async (req,res) => {
    
    if (!req.body)
     {
        res.status(400).json({message: "Missing Fields"})
     }

    console.log(req.body)

    const {email,password,firstname,lastname,username} = req.body
    try 
    {
        const user = await User.signup(email,password,firstname,lastname,username)

        const token = createToken(user._id)
        res.status(200).json({email,token})

    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser,signupUser,refreshUser,logoutUser}