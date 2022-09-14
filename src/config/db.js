const mongoose = require("mongoose")

// mongoose.connect('mongodb+srv://kiranrathor:KiranRathor@kiran.ov8n8w8.mongodb.net/?retryWrites=true&w=majority').then(d=>console.log("connect")).catch(err=>console.log(err))
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false').then(()=>{
    console.log("connect")
}).catch((err)=>{
    console.log("error in connection",err)
})

module.exports = {mongoose}