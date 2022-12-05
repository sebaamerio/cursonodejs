const router = require("express").Router();
const pacienteController = require("../controllers/paciente.controller");
const validate = require("../middlewares/validate");
const schemePaciente = require("../middlewares/scheme/paciente.scheme");

router.post(
  "/",
  validate(schemePaciente.crearPaciente),
  pacienteController.crear
);
router.get("/", pacienteController.all);
router.get("/:id", pacienteController.info);

module.exports = router;
