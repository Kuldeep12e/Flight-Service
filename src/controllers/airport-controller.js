const {AirportService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse , ErrorResponse} = require('../utils/common');
const { add } = require('nodemon/lib/rules');



async function createAirport(req, res) {
  try {
    
    const airportData = req.body;
    const airport = await AirportService.createAirport({
      name: airportData.name,
      code: airportData.code,
      address: airportData.address,
        cityId: airportData.cityId
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error;
   
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}




async function getAirports(req, res){
  try{
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  }catch (error) {
    ErrorResponse.error = error;        
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}


async function getAirport(req, res){
  try{
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  }catch (error) {
    ErrorResponse.error = error;  
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}


async function destroyAirport(req, res){ 
  try{
    const response = await AirportService.destroyAirport(req.params.id);    
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  }catch (error) {  
    ErrorResponse.error = error;  
    return res
        .status(error.statusCode)
        .json(ErrorResponse);
  }
}


async function updateAirport(req, res){ 
  try{
    const airportData = req.body;
    const response = await AirportService.updateAirport(airportData, req.params.id);    
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport,
};