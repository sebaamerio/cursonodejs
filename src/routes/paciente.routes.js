const router = require("express").Router();
const pacienteController = require("../controllers/paciente.controller");

router.get("/", pacienteController.all);
router.put("/:id", pacienteController.editar);
router.post("/:id", pacienteController.crear);
router.get("/:id", pacienteController.info);

module.exports = router;
