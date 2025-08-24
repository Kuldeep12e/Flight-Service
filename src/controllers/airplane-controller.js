const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse , ErrorResponse} = require('../utils/common');


/*
* Post: /airplanes
* Create a new airplane 
  * req-body {modelNumber: "airbus320" , capacity: 180 }
*/
async function createAirplane(req, res) {
  try {
    
    const airplaneData = req.body;
    const airplane = await AirplaneService.createAirplane({
      modelNumber: airplaneData.modelNumber,
      capacity: airplaneData.capacity
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error;
   
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}


async function getAirplanes(req, res){
  try{
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  }catch (error) {
    ErrorResponse.error = error;
   
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}


module.exports = {
  createAirplane,
  getAirplanes
};