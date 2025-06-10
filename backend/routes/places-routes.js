const express = require('express');
const { check } = require('express-validator');
const placesController = require('../controllers/places-controller');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// find the places according to the placeId
router.get('/:pid', placesController.getPlaceById);

// find the places according to the userId
router.get('/user/:uid', placesController.getPlacesByUserId);

router.use(checkAuth);

//create a place 
router.post('/',
    fileUpload.single('image'),
    [
    check('title').not().isEmpty(),
    check('description').isLength({ min : 5}),
    check('address').not().isEmpty()
], placesController.createPlace);

//update a place
router.patch('/:pid',
    [
        check('title')
          .not()
          .isEmpty(),
        check('description').isLength({ min: 5 })
    ]
, placesController.updatePlace);

//delete a place 
router.delete('/:pid', placesController.deletePlace);

module.exports = router;