// conectar
const { Router } = require("express"); // importar express

const medicoRoutes = require("./medico.routes");
const pacienteRoutes = require("./paciente.routes");
const tratamientoRoutes = require("./tratamiento.routes");

const rutas_init = () => {
  // aca se ponen todas las rutas que existen
  const router = Router();

  router.use("/paciente", pacienteRoutes);
  router.use("/medico", medicoRoutes);
  router.use("/tratamiento", tratamientoRoutes); // para acceder a las rutas de usuarios de la api siempre deberá empezar con /usuarios

  return router; // retornar el router
};

module.exports = { rutas_init }; // exportar el archivo de rutas de la api
