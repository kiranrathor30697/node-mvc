const { validationResult } = require("express-validator");
const { User } = require("../model/userSchema");
const bcrypt = require('bcrypt');

const registerController = async (req,res)=>{
    // console.log(req.body)
    let {username,email,password,confirmPassword} = req.body;
    const errors = validationResult(req);
    console.log(errors)

    if(errors.isEmpty()){
        User.findOne({ email:email},(err,user)=>{
            if(err === null){
                if(password === confirmPassword){
                    const salt = 10;
                    const pass_hash = bcrypt.hashSync(password,salt)
                    password = pass_hash

                    // bcrypt.genSalt(saltRounds, function(err, salt) {
                    //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                            // Store hash in your password DB.
                    //     });
                    // });

                    


                    const UserData = new User({username,email,password});
                    console.log('daddddddd',UserData)
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



// const { validationResult } = require("express-validator");
// const { User } = require("../model/userSchema");

// const registerController = async (req,res)=>{

//     console.log(req.body)
//     let {username,email,password,confirmPassword} = req.body;
//     // if(password === confirmPassword){
//         const errors = validationResult(req);
//         console.log(errors)

//         if(errors.isEmpty()){
//             User.findOne({ email:req.body.email},(err,user)=>{
//                 if(err === null){
//                     if(password === confirmPassword){
//                         const UserData = new User({username,email,password});
//                         UserData.save()
//                         .then(data=>{
//                             res.status(201).json({
//                                 message: "Register successfully",
//                                 data:data
//                             })
//                         })
//                         .catch((err)=>{
//                             console.log(err)
//                             res.status(400).json({
//                                 message: "Register Failed , Email already exist",
//                                 error:err
//                             })
//                         })
//                     }else{
//                         res.status(400).json({
//                             message: "password and confirmPassword not match",
//                         })
//                     } 
//                 }
//             });
        
//         }
//         else{
//             res.status(404).json({errors:errors.array()});
//         }
//     // }else{
//     //     res.status(400).json({
//     //         message: "password and confirmPassword not match",
//     //     })
//     // }

    
// }

// module.exports = {registerController}