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

    async updateRemainingSeats(flightId, seats, dec ) {
     const transaction = await db.sequelize.transaction();
    try {     
    await db.sequelize.query(`Select * from Flights WHERE Flights.id= ${flightId} FOR UPDATE;`)
    const flight = await Flight.findByPk(flightId);
     console.log(dec);
    if (+dec) {
        await flight.decrement('totalSeats', { by: seats }, { transaction: transaction });
    } else {
        await flight.increment('totalSeats', { by: seats }, { transaction: transaction });
    }

    await flight.reload(); 
    await transaction.commit();
    return flight;
  
        
    } catch (error) {
        await transaction.rollback();
        throw error;
    
    
    }
    }
    
}
module.exports = FlightRepository;
