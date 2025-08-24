const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req, res, next) {
  
  if(!req.body.modelNumber){
    ErrorResponse.message = 'Model number is required';
    ErrorResponse.error ='Model number is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    
  }

  next();
}

module.exports = {
  validateCreateRequest
}