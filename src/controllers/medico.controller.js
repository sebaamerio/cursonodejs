module.exports = {
  crear: async (req, res) => {
    try {
      res.json({
        message: "Alta de medico",
      });
    } catch (err) {
      console.log(err);
    }
  },

  editar: async (req, res) => {
    try {
      res.json({
        message: "Modificar medico",
      });
    } catch (err) {
      console.log(err);
    }
  },

  all: async (req, res) => {
    try {
      res.json({
        message: "Lista de medicos",
      });
    } catch (err) {
      console.log(err);
    }
  },

  info: async (req, res) => {
    try {
      res.json({
        message: "Información de un medico",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
