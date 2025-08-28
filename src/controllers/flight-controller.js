const {FlightService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse , ErrorResponse} = require('../utils/common');
const { add } = require('nodemon/lib/rules');


async function createFlight(req, res) {
  try { 
    const flightData = req.body;
    const flight = await FlightService.createFlight({
      flightNumber: flightData.flightNumber,
      airplaneId: flightData.airplaneId,
      departureAirportId: flightData.departureAirportId,
      arrivalAirportId: flightData.arrivalAirportId,
      arrivalTime: flightData.arrivalTime,
      departureTime: flightData.departureTime,
      price: flightData.price,
      boardingGate: flightData.boardingGate,
      totalSeats: flightData.totalSeats
    });
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error;
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}





module.exports = {
    createFlight,
 
};