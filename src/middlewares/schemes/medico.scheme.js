const Joi = require("joi");

let crearMedico = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  email: Joi.string().email().optional(),
  especialidad: Joi.string().required(),
  tiempo_trabajando: Joi.number().optional(),
});

module.exports = {
  crearMedico,
};
