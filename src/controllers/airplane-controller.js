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



/*
* Get: /airplanes
* Get all airplanes

*/

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


/*
* Get: /airplanes/id
* Get all airplanes

*/
async function getAirplane(req, res){
  try{
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  }catch (error) {
    ErrorResponse.error = error;  
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}

/*
* Delete: /airplanes:id
* Get all airplanes

*/

async function destroyAirplane(req, res){ 
  try{
    const response = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = response;
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
  getAirplanes,
  getAirplane,
  destroyAirplane
};