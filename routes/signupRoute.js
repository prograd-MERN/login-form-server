const express = require('express')
const router = express.Router()
const {signinExistingUser}= require('../controller/signupController')
router.route('/signup').post(signinExistingUser)
module.exports = router