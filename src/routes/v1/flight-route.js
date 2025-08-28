const express = require('express');
const router = express.Router();
const {FlightController} = require('../../controllers');
const {FlightMiddleware} = require('../../middlewares');   
const { route } = require('./airplane-route');


// /api/v1/flights POST
router.post('/', FlightMiddleware.validateCreateRequest, FlightController.createFlight)
router.get('/', FlightController.getAllFlights);
module.exports = router;