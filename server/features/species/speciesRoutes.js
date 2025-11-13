const express = require('express');
const router = express.Router();
const controller = require('./speciesControllers');

// BASIC CRUD

router.get("/", controller.getAllSpecies);
router.get("/:id", controller.getSpeciesById);
router.post("/", controller.createSpecies);
router.put("/:id", controller.updateSpecies);
router.delete("/:id", controller.deleteSpecies);

module.exports = router;