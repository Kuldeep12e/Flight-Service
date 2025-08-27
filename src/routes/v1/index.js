const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoute = require('./airplane-route');
const airportRoute = require('./airport-route');
const router = express.Router();

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoute);
router.use('/airports', airportRoute);
router.use('/city', require('./city-route'));

module.exports = router;
