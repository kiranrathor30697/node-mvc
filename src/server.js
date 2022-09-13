const express = require('express');
const { registerMiddle } = require('./middleware/registerMiddleware');
const { loginRouter } = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const app = express();
require('dotenv').config()

app.use(express.json())
app.use('/api',registerMiddle,registerRouter)
app.use('/api/',loginRouter)

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("Server running on this port",port)
})