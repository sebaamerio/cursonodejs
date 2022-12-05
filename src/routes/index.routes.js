// conectar
const { Router } = require("express"); // importar express

const medicoRoutes = require("./medico.routes");
const pacienteRoutes = require("./paciente.routes");

const rutas_init = () => {
  // aca se ponen todas las rutas que existen
  const router = Router();

  router.use("/paciente", pacienteRoutes);
  router.use("/medico", medicoRoutes);

  return router; // retornar el router
};

module.exports = { rutas_init }; // exportar el archivo de rutas de la api
