const express = require('express');
const router = express.Router();
const {AirplaneController} = require('../../controllers');
const {AirplaneMiddleware} = require('../../middlewares');

// /api/v1/airplanes POST

router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);

module.exports = router;