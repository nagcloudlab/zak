const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const authorize = require('../middlewares/auth')
const { check, validationResult } = require('express-validator')


// Sign-in
router.post('/signin', (req, res, next) => {
  let jwtToken = jwt.sign(
    {
      email: req.body.email,
      userId: /*getUser._id*/123,
    },
    'longer-secret-is-better',
    {
      expiresIn: '1h',
    },
  )
  res.status(200).json({
    token: jwtToken,
    expiresIn: 3600,
    _id: /*getUser._id*/123,
  })

})


// Get Single User
router.route('/user-profile/:id').get(authorize, (req, res, next) => {
  res.status(200).json({
    msg: {
      name: "Foo",
      email: "upchh@example.com",
    },
  })
})

module.exports = router
