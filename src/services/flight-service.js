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



module.exports = {
  createFlight,
  getAllFlight
}




