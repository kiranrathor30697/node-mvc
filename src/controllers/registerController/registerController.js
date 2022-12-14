const { validationResult } = require("express-validator");
const { User } = require("../../model/userSchema");
const bcrypt = require('bcrypt');

const registerController = async (req,res)=>{
    let {username,email,password,confirmPassword} = req.body;
    const errors = validationResult(req);

    if(errors.isEmpty()){
        User.findOne({ email:email},(err,user)=>{
            if(err === null){
                if(password === confirmPassword){
                    const salt = 10;
                    const pass_hash = bcrypt.hashSync(password,salt)
                    password = pass_hash

                    const UserData = new User({username,email,password});
                    UserData.save()
                    .then(data=>{
                        res.status(201).json({
                            message: "Register successfully",
                            data:data
                        })
                    })
                    .catch((err)=>{
                        console.log(err)
                        res.status(400).json({
                            message: "Register Failed,Email Already Exist",
                            error:err
                        })
                    })
                }else{
                        res.status(400).json({
                        message: "password and confirmPassword not match",
                    })
                }
            }else{
                res.status(400).json({
                    message: "Email already exist",
                    data:data
                })
            }
        });
       
    }else{
        res.status(404).json({errors:errors.array()});

    }
}

module.exports = {registerController}



