const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const  AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

function createCity(data) {
   try{
     const city = cityRepository.create(data);
     return city;
   }catch (error) {
      if(error.name =='SequelizeValidationError'){
        let explanation =[];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError("Can not create city object" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getCities(){
  try{
    const city = await cityRepository.getAll();
    return city;
  }catch (error) {
    throw new AppError("Can not fetch data of all city" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getCity(id){
  try{
    const city = await cityRepository.get(id);
    return city;
  }catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("The city you requested is not available", StatusCodes.NOT_FOUND);
    } 
    throw new AppError("Can not fetch data of city" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyCity(id){ 
    try{
        const response = await cityRepository.destroy(id);
        return response;
    }catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new AppError("The city you requested to delete is not available", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Can not delete data of city" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
    }   


async function updateCity(data, id){
  try{
    const response = await cityRepository.update(data, id);
    return response;
  }catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("The city you requested to update is not available", StatusCodes.NOT_FOUND);
    }
    throw new AppError("Can not update data of city" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}