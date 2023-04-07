const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const router = express.Router();

// Multer File upload settings
const DIR = './public/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-')
    cb(null, fileName)
  },
})

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  },
})


// POST User
router.post('/create-user', upload.single('avatar'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const user = {
    name: req.body.name,
    avatar: url + '/public/' + req.file.filename,
  }
  res.status(201).json({})
})


module.exports = router
