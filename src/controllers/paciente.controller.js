const models = require("../database/models/index");

module.exports = {
  crear: async (req, res, next) => {
    try {
      const paciente = await models.paciente.create(req.body);

      const relacion = await models.paciente_medico.create({
        pacienteId: paciente.id,
        medicoId: req.body.medicoId,
      });

      res.json({
        success: true,
        data: {
          id: paciente.id,
        },
      });
    } catch (err) {
      return next(err);
    }
  },

  info: async (req, res, next) => {
    try {
      const paciente = await models.paciente.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: models.paciente_medico,
            include: [{ model: models.medico }],
          },
        ],
      });
      res.json({
        success: true,
        data: paciente,
      });
    } catch (err) {
      return next(err);
    }
  },

  all: async (req, res, next) => {
    try {
      const pacientes = await models.paciente.findAll();
      res.json({
        success: true,
        data: pacientes,
      });
    } catch (err) {
      return next(err);
    }
  },
};
