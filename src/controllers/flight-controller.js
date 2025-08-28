const {FlightService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse , ErrorResponse} = require('../utils/common');
const { add } = require('nodemon/lib/rules');
const { get } = require('../routes/v1');


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


async function getAllFlights(req, res){
    try{
      const flights = await FlightService.getAllFlight(req.query);
      SuccessResponse.data = flights;
      return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch (error) {
      ErrorResponse.error = error;        
      return res
          .status(error.statusCode)
          .json(ErrorResponse);
    }
  }

  async function getFlight(req, res){
  try{
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  }catch (error) {
    ErrorResponse.error = error;  
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}


module.exports = {
    createFlight,
    getAllFlights,
    getFlight
 
};