const crudRepository = require('./crud-repository');
const {Flight} = require('../models');

class FlightRepository extends crudRepository { 
    constructor() {
        super(Flight);
    }
        getAllFlights(filter, sort) {
            return this.model.findAll({ where: filter , order: sort });

        }
    }
module.exports = FlightRepository;  
