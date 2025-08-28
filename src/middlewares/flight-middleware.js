const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req, res, next) {
  
    if(!req.body.flightNumber){ 
    ErrorResponse.message = 'FlightNumber is required';
    ErrorResponse.error =' FlightNumber is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.airplaneId){ 
    ErrorResponse.message = 'AirplaneId is required';
    ErrorResponse.error =' AirplaneId is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.departureAirportId){ 
    ErrorResponse.message = 'DepartureAirportId is required';
    ErrorResponse.error =' DepartureAirportId is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.arrivalAirportId){ 
    ErrorResponse.message = 'ArrivalAirportId is required';
    ErrorResponse.error =' ArrivalAirportId is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.arrivalTime){ 
    ErrorResponse.message = 'ArrivalTime is required';
    ErrorResponse.error =' ArrivalTime is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.departureTime){ 
    ErrorResponse.message = 'DepartureTime is required';
    ErrorResponse.error =' DepartureTime is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.price){ 
    ErrorResponse.message = 'Price is required';
    ErrorResponse.error =' Price is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.totalSeats){ 
    ErrorResponse.message = 'TotalSeats is required';
    ErrorResponse.error =' TotalSeats is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }   
    next(); 
}

module.exports = {
  validateCreateRequest
}