'use strict';

const {Op} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

       await queryInterface.bulkInsert('Airplanes', [
        {
          modelNumber: 'Boein747',
          capacity: 660,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelNumber: 'AirbusA380',
          capacity: 850,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelNumber: 'Boein737',
          capacity: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Airplanes', {
      modelNumber: { [Op.in]: ['Boein747', 'AirbusA380', 'Boein737'] }
    }, {});
  }
};
