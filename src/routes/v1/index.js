const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoute = require('./airplane-route');
const router = express.Router();

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoute);


module.exports = router;
