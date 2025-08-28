'use strict';

const airplane = require('../models/airplane');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row: 1, 
        col: 'A',
        type: 'FIRST_CLASS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1, 
        col: 'B',
        type: 'FIRST_CLASS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1, 
        col: 'C',
        type: 'FIRST_CLASS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1, 
        col: 'D',
        type: 'FIRST_CLASS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1, 
        col: 'E',
        type: 'FIRST_CLASS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1, 
        col: 'F',
        type: 'FIRST_CLASS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2, 
        col: 'A',
        type: 'BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2, 
        col: 'B',
        type: 'BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2, 
        col: 'C',
        type: 'BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,  
        row: 2,
        col: 'D', 
        type: 'BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date(),    

      },
      {
        airplaneId: 1,
        row: 2, 
        col: 'E',
        type: 'BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2, 
        col: 'F',
        type: 'BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3, 
        col: 'A',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3, 
        col: 'B',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3, 
        col: 'C',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3, 
        col: 'D',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3, 
        col: 'E',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3, 
        col: 'F',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4, 
        col: 'A',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4, 
        col: 'B',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4, 
        col: 'C',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4, 
        col: 'D',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4, 
        col: 'E',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4, 
        col: 'F',
        type: 'ECONOMY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats', null, {});
  }
};
