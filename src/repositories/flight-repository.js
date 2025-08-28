const crudRepository = require('./crud-repository');
const {Flight , Airplane , Airport , City} = require('../models');
const { required } = require('nodemon/lib/config');
const {sequelize} = require('sequelize');


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
    }
module.exports = FlightRepository;
