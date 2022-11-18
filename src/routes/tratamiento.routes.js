const router = require("express").Router();
const tratamientoController = require("../controllers/tratamiento.controller");

router.get("/", tratamientoController.all);
router.put("/:id", tratamientoController.editar);
router.post("/:id", tratamientoController.crear);
router.get("/:id", tratamientoController.info);

module.exports = router;
