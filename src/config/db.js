const mongoose = require("mongoose")

// mongoose.connect('mongodb+srv://kiranrathor:KiranRathor@kiran.ov8n8w8.mongodb.net/?retryWrites=true&w=majority').then(d=>console.log("connect")).catch(err=>console.log(err))
mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
    console.log("connect")
}).catch((err)=>{
    console.log("error in connection",err)
})

module.exports = {mongoose}