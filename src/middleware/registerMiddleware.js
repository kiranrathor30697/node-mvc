const { check } = require("express-validator")

const registerMiddle = [
    check('username', 'username name is required').notEmpty().isAlpha().withMessage('please! enter a valid username'),
    check('email','Email is required').notEmpty().isEmail().withMessage('please! enter a valid Email'),
    check('password').notEmpty().withMessage('please! enter a valid Password')
]

module.exports = { registerMiddle }