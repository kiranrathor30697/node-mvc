const express = require('express')
const teacterRouter = express.Router()

teacterRouter.post('/teacher/create',(req,res)=>{
    console.log(req.headers)
    console.log(req)
    res.status(200).json({
        msg:"ok"
    })
})

module.exports = {teacterRouter}