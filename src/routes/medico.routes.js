const router = require("express").Router();
const medicoController = require("../controllers/medico.controller");
const validate = require("../middlewares/validate");
const schemeMedico = require("../middlewares/schemes/medico.scheme");

router.post("/", validate(schemeMedico.crearMedico), medicoController.crear);
router.get("/", medicoController.all);
router.get("/:id", medicoController.info);

module.exports = router;
