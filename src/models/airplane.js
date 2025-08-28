'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    
    static associate(models) {
      this.hasMany(models.Flight,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      
      });
    }
  }
  Airplane.init({
    modelNumber: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};