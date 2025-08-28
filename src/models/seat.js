'use strict';
const {
  Model
} = require('sequelize');
const {ENUMS} = require('../utils/common');
const {BUSINESS , FIRST_CLASS , PREMIUM_ECONOMY ,ECONOMY } = ENUMS.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
    }
  }
  Seat.init({
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type:DataTypes.ENUM,
      values: [ECONOMY , BUSINESS , FIRST_CLASS , PREMIUM_ECONOMY],
      defaultValue: ECONOMY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};