const express = require("express");
let createError = require("http-errors");
const routerConfig = require("./routes/index.routes.js");
const globalConstants = require("./const/globalConstants.js");
let errorHandler = require("./middlewares/error");

const configuracionApi = (app) => {
  // configurar la api
  app.use(express.json()); // para que la api pueda recibir json
  app.use(express.urlencoded({ extended: true })); // para que la api pueda recibir formularios
  return;
};

const configuracionRouter = (app) => {
  // configurar las rutas
  app.use("/api/", routerConfig.rutas_init());

  app.use(function (req, res, next) {
    next(createError(404)); // si no se encuentra la ruta, se envia un error 404
  });
  app.use(errorHandler); // configurar el middleware de manejo de errores
};

const init = () => {
  const app = express();
  configuracionApi(app);
  configuracionRouter(app);
  app.listen(globalConstants.PORT);
  console.log(
    "La aplicacion se está ejecutando en el puerto:" + globalConstants.PORT
  );
};

init(); // iniciar la aplicación
