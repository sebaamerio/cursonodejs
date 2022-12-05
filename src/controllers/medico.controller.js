const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports = {
  crear: async (req, res, next) => {
    try {
      const medico = await models.medico.create(req.body);
      console.log(req.body);
      res.json({
        success: true,
        data: {
          id: medico.id,
        },
      });
    } catch (err) {
      return next(err);
    }
  },

  all: async (req, res, next) => {
    try {
      const medicos = await models.medico.findAll();
      res.json({
        success: true,
        data: medicos,
      });
    } catch (err) {
      return next(err);
    }
  },

  info: async (req, res, next) => {
    try {
      const medico = await models.medico.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: models.paciente_medico,
            include: [{ model: models.paciente }],
          },
        ],
      });
      if (!medico) return next(errors.MedicoInexistente);
      res.json({
        success: true,
        data: medico,
      });
    } catch (err) {
      return next(err);
    }
  },
};
