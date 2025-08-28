const crudRepository = require('./crud-repository');
const {Flight , Airplane , Airport , City} = require('../models');
const { required } = require('nodemon/lib/config');
const {sequelize} = require('sequelize');

const db = require('../models')


class FlightRepository extends crudRepository { 
    constructor() {
        super(Flight);
    }
        async getAllFlights(filter, sort) {
            const response = await Flight.findAll({
                where: filter,
                order: sort,
                include: [
                    {
                        model: Airplane,
                        required: true
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'departureAirport',  
                        include: {
                            model: City,
                            required: true
                        }                
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'arrivalAirport'  ,
                        include: {
                            model: City,
                            required: true
                        }                
                    },
                   
                ]
                
                
            });
           return response



        }

    async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(`Select * from Flights WHERE Flights.id= ${flightId} FOR UPDATE;`)
    const flight = await Flight.findByPk(flightId);
    if (!flight) return null;
    if (parseInt(dec)) {
        await flight.decrement('totalSeats', { by: seats });
    } else {
        await flight.increment('totalSeats', { by: seats });
    }
    await flight.reload(); 
    return flight;
  }

    }
module.exports = FlightRepository;
