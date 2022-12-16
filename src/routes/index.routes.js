// conectar
const { Router } = require("express"); // importar express

const medicoRoutes = require("./medico.routes");
const pacienteRoutes = require("./paciente.routes");
const authRoutes = require("./auth.routes");
const decodeJWT = require("../middlewares/decodeJWT");

const rutas_init = () => {
  // aca se ponen todas las rutas que existen
  const router = Router();

  router.use("/paciente", decodeJWT, pacienteRoutes);
  router.use("/medico", decodeJWT, medicoRoutes);

  return router; // retornar el router
};

const rutas_auth = () => {
  const router = Router();

  router.use("/auth", authRoutes);

  return router;
};

module.exports = { rutas_init, rutas_auth };
