const express = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users-controller');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/signup', 
    fileUpload.single('image'),
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail() 
      .isEmail(),
    check('password').isLength({ min: 6 })
], usersController.signup);

router.post('/login', [
    check('email')
      .normalizeEmail() 
      .isEmail(),
    check('password').not().isEmpty()
], usersController.login);

module.exports = router;