const { Schema } = require('mongoose')
const { mongoose } = require('../config/db.js')
let userSchema = new Schema({
                            username:{
                                type: String,
                                required: true,
                            },
                            email:{
                                type: String,
                                unique: true,
                                required: true
                            },
                            role:{
                                type:String,
                                enum:["admin","teacher","student"],
                                default:"student"
                            },
                            password:{
                                type: String,
                                required: true,
                                minLength:8
                            },
                            confirmPassword:{
                                type: String,
                                minLength:8
                            }
                            },{
                                timestamps:true
                            });

const User = mongoose.model('User',userSchema)

module.exports = {User}