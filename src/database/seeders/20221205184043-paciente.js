"use strict";
const models = require("../models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.paciente.findOrCreate({
        where: {
          id: "1",
        },
        defaults: {
          nombre: "Cesar",
          apellido: "Martinez",
        },
      }),
      models.paciente.findOrCreate({
        where: {
          id: "2",
        },
        defaults: {
          nombre: "Nicolas",
          apellido: "Gimenez",
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
