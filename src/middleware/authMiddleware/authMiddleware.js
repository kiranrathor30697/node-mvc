const jwt = require('jsonwebtoken')
const authMiddleware = (req,res,next)=>{
    if(req.headers.authorization === undefined){
        res.status(401).json({
            message:"Unauthorized"
        })
    }

    const token = req.headers.authorization.split(" ")[1]

    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        console.log(decoded)
    } catch (error) {
        console.log('error')
    }
}

module.exports = { authMiddleware }