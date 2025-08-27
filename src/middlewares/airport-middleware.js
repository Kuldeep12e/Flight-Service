const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req, res, next) {
  
  if(!req.body.name){
    ErrorResponse.message = 'Name is required';
    ErrorResponse.error =' Name is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    
  }
    if(!req.body.code){ 
    ErrorResponse.message = 'Code is required';
    ErrorResponse.error =' Code is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.address){ 
    ErrorResponse.message = 'Address is required';
    ErrorResponse.error =' Address is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }
    if(!req.body.cityId){ 
    ErrorResponse.message = 'CityId is required';
    ErrorResponse.error =' CityId is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse); 
    }

  next();
}

module.exports = {
  validateCreateRequest
}