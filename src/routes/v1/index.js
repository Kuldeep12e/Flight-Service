const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoute = require('./airplane-route');
const airportRoute = require('./airport-route');
const cityRoute = require('./city-route');
const flightRoute = require('./flight-route');
const router = express.Router();

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoute);
router.use('/airports', airportRoute);
router.use('/city', cityRoute);
router.use('/flights', flightRoute);

module.exports = router;
