const crudRepository = require('./crud-repository');
const {Flight} = require('../models');

class FlightRepository extends crudRepository { 
    constructor() {
        super(Flight);
    }
        // Additional methods specific to Flight can be added here    
    }
module.exports = FlightRepository;  
