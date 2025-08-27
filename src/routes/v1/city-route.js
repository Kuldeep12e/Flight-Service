const express = require('express');
const router = express.Router();
const {CityController} = require('../../controllers');
const {CityMiddleware} = require('../../middlewares');

// /api/v1/cities POST  
router.post('/', CityMiddleware.validateCreateRequest, CityController.createCity);
router.get('/', CityController.getCities);
router.get('/:id', CityController.getCity);
router.delete('/:id', CityController.destroyCity);
 router.patch('/:id', CityController.updateCity); // Update route can be added if needed  
module.exports = router;
