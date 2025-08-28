const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const  AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');

const flightRepository = new FlightRepository();

function createFlight(data) {
   try{
     const flight = flightRepository.create(data);
     return flight;
   }catch (error) {
      if(error.name =='SequelizeValidationError'){
        let explanation =[];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError("Can not create flight object" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}


async function getAllFlight(query){
  let customFilter = {}
  let sortFilter = []
  let endingTripTime = query.tripdate + " 23:59:59"
  if(query.trip){
    [departureAirportId, arrivalAirportId] = query.trip.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;

    //todo: add a check they are not same;
  }
  if(query.price){
    let [minPrice, maxPrice] = query.price.split("-");
    minPrice = Number(minPrice);
    maxPrice = maxPrice ? Number(maxPrice) : 99999;
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice]
    }
  }

    if(query.travellers){
      customFilter.totalSeats = {
        [Op.gte]: query.travellers
      }
    }   

    if(query.tripdate){
      customFilter.departureTime = {
        [Op.between]: [query.tripdate , endingTripTime]
    }
  }

  if(query.sort){
    const params = query.sort.split(",");
    const sortFilter= params.map((param) => param.split("."));
    sortFilter = sortFilter;
  }

  

  try{
    const flight = await flightRepository.getAllFlights(customFilter);
    return flight;
  }catch (error) {
    throw new AppError("Can not fetch data of all flight" , StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getFlight(id) {
  try{
    const flight = await flightRepository.get(id);
    return flight;

  }catch(error){
   if(error.StatusCodes== StatusCodes.NOT_FOUND){
    throw new AppError('The flight you requested is not present' , error.StatusCodes)
   }
   
   throw new AppError('The flight is not present' , StatusCodes.INTERNAL_SERVER_ERROR)
  
}
}

async function updateSeats(data){
  try {
    const response = await flightRepository.updateRemainingSeats(data.flightId,data.seats,data.desc);
    return response;
    
  } catch (error) {
    throw new AppError('can not update data of the flight' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


module.exports = {
  createFlight,
  getAllFlight,
  getFlight,
  updateSeats
}




