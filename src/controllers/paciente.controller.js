module.exports = {
  crear: async (req, res) => {
    try {
      res.json({
        message: "Alta de paciente",
      });
    } catch (err) {
      console.log(err);
    }
  },

  editar: async (req, res) => {
    try {
      res.json({
        message: "Editar paciente",
      });
    } catch (err) {
      console.log(err);
    }
  },

  all: async (req, res) => {
    try {
      res.json({
        message: "Listar pacientes",
      });
    } catch (err) {
      console.log(err);
    }
  },

  info: async (req, res) => {
    try {
      res.json({
        message: "Información de un paciente",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
