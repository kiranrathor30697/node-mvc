const { User } = require("../model/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const loginControllers = (req, res)=>{
    User.findOne({email: req.body.email})
    .then(data=>{
        if(!data){
            res.status(403).json({
                message:"Invalid Credentials"
            })
        }else{
            if(bcrypt.compareSync(req.body.password,data.password)){
                const token = jwt.sign(
                                        {
                                            email:data.email,
                                            userId:data._id,
                                            username:data.username
                                        },
                                        process.env.SECRET_KEY,
                                        {
                                            expiresIn: "7day"
                                        }
                                    )
                res.status(200).json({
                    message:"Login successfully",
                    token
                })
            }else{
                res.status(200).json({
                    message:"Invalid Credentials"
                })
            }
        }
    })
    .catch(e=>{
        console.log(e)
    })
}

exports.loginControllers = loginControllers