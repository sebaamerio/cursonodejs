"use strict";
const models = require("../models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.medico.findOrCreate({
        where: {
          id: "1",
        },
        defaults: {
          nombre: "Juan",
          apellido: "Gonzalez",
          email: "emailJuan@email.com",
          especialidad: "Cirujano",
          tiempo_trabajando: 10,
        },
      }),
      models.medico.findOrCreate({
        where: {
          id: "2",
        },
        defaults: {
          nombre: "Pedro",
          apellido: "Gomez",
          email: "emailPedro@email.com",
          especialidad: "Pediatra",
          tiempo_trabajando: 20,
        },
      }),
    ]);
  },

  /*
  async up(queryInterface, Sequelize) {
    models.medico.findOrCreate({
      where: {
        id: "1",
      },
      defaults: {
        nombre: "Juan",
        apellido: "Gonzalez",
        email: "emailJuan@email.com",
        especialidad: "Cirujano",
        tiempo_trabajando: 10,
      },
    }),
      models.medico.findOrCreate({
        where: {
          id: "2",
        },
        defaults: {
          nombre: "Pedro",
          apellido: "Gomez",
          email: "emailPedro@email.com",
          especialidad: "Pediatra",
          tiempo_trabajando: 20,
        },
      });
  },
*/
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
