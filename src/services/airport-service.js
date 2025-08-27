const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositories');
const  AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

function createAirport(data) {
   try{
     const airport = airportRepository.create(data);
     return airport;
   }catch (error) {
      if(error.name =='SequelizeValidationError'){
        let explanation =[];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError("Can not create airport object" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirports(){
  try{
    const airport = await airportRepository.getAll();
    return airport;
  }catch (error) {
    throw new AppError("Can not fetch data of all airport" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getAirport(id){
  try{
    const airport = await airportRepository.get(id);
    return airport;
  }catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("The airport you requested is not available", StatusCodes.NOT_FOUND);
    } 
    throw new AppError("Can not fetch data of airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirport(id){
  try{
    const response = await airportRepository.destroy(id);
    return response;
  }catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("The airport you requested to delete is not available", StatusCodes.NOT_FOUND);
    }
    throw new AppError("Can not delete data of airport" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateAirport(data, id){
  try{
    const response = await airportRepository.update(data, id);
    return response;
  }catch (error) {    
    if(error.name =='SequelizeValidationError'){
      let explanation =[];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Can not update data of airport" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport,
};