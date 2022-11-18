module.exports = {
  crear: async (req, res) => {
    try {
      res.json({
        message: "Alta de tratamiento",
      });
    } catch (err) {
      console.log(err);
    }
  },

  editar: async (req, res) => {
    try {
      res.json({
        message: "Editar tratamiento",
      });
    } catch (err) {
      console.log(err);
    }
  },

  all: async (req, res) => {
    try {
      res.json({
        message: "Listar tratamientos",
      });
    } catch (err) {
      console.log(err);
    }
  },

  info: async (req, res) => {
    try {
      res.json({
        message: "Información de un tratamiento",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
