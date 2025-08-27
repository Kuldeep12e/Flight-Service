const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req, res, next) {
  
  if(!req.body.name){
    ErrorResponse.message = 'Name is required';
    ErrorResponse.error =' Name is missing in the request body';
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    
  }
  next();
}
module.exports = {
  validateCreateRequest
}