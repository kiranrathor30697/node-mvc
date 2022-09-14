const express = require('express');
const { loginControllers } = require('../../controllers/loginController/loginControllers');
const loginRouter = express.Router();

loginRouter.post('/login',loginControllers)
exports.loginRouter = loginRouter;