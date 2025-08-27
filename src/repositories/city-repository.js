const crudRepository = require('./crud-repository');
const {City} = require('../models');

class CityRepository extends crudRepository {
  constructor() {
    super(City);
  }
    // Additional methods specific to City can be added here    
}
module.exports = CityRepository;
