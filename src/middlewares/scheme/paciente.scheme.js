const Joi = require("joi");

let crearPaciente = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  medicoId: Joi.number().required(),
});

module.exports = {
  crearPaciente,
};
