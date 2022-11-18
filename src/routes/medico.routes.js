const router = require("express").Router();
const medicoController = require("../controllers/medico.controller");

router.get("/", medicoController.all);
router.put("/:id", medicoController.editar);
router.post("/:id", medicoController.crear);
router.get("/:id", medicoController.info);

module.exports = router;
