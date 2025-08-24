const crudRepository = require('./crud-repository');
const {Airplane} = require('../models');

class AirplaneRepository extends crudRepository {
  constructor() {
    super(Airplane);
  }
    // Additional methods specific to Airplane can be added here    
}
module.exports = AirplaneRepository;