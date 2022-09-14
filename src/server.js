const express = require('express');
const { authMiddleware } = require('./middleware/authMiddleware/authMiddleware');
const { validationMiddle } = require('./middleware/validationMiddleware/validationMiddleware');
const { loginRouter } = require('./routes/loginRoute/loginRouter');
const registerRouter = require('./routes/registerRoute/registerRouter');
const { teacterRouter } = require('./routes/teacherRoute/teacherRouter');
const app = express();
require('dotenv').config()

app.use(express.json())
app.use('/api',validationMiddle,registerRouter)
app.use('/api/',loginRouter)
app.use('/api',authMiddleware,teacterRouter)

const port = process.env.PORT || 10000
app.listen(port,()=>{
    console.log("Server running on this port",port)
})