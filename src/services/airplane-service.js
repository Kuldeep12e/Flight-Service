const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const  AppError = require('../utils/errors/app-error');

const airplaneRepostiory = new AirplaneRepository();

function createAirplane(data) {
   try{
     const airplane = airplaneRepostiory.create(data);
     return airplane
   }catch (error) {
      if(error.name =='SequelizeValidationError'){
        let explanation =[];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError("Can not create airplane object" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirplanes(){
  try{
    const airplanes = await airplaneRepostiory.getAll();
    return airplanes;
  }catch (error) {
    throw new AppError("Can not fetch data of all airplanes" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getAirplane(id){
  try{
    const airplane = await airplaneRepostiory.get(id);
    return airplane;
  }catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("The airplane you requested is not available", StatusCodes.NOT_FOUND);
    } 
    throw new AppError("Can not fetch data of airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirplane(id){
  try{
    const response = await airplaneRepostiory.destroy(id);
    return response;
  }catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("The airplane you requested to delete is not available", StatusCodes.NOT_FOUND);
    }
    throw new AppError("Can not delete data of airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane
  // Other service methods can be added here
};