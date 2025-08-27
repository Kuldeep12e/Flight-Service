const crudRepository = require('./crud-repository');
const {Airport} = require('../models');

class AirportRepository extends crudRepository {
  constructor() {
    super(Airport);
  }
    // Additional methods specific to Airport can be added here    
}
module.exports = AirportRepository; 
