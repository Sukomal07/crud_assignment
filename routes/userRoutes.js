const express = require('express')
const {home, createUser, signIn} = require('../controller/userControler')
const router = express.Router()

router.get('/', home)
router.post('/signup',createUser)
router.post('/signin', signIn)

module.exports = router