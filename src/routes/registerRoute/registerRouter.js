const express = require('express');
const { registerController } = require('../../controllers/registerController/registerController');
const registerRouter = express.Router();

registerRouter.post('/register',registerController)

module.exports = registerRouter;
    