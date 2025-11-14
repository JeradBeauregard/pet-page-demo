const express = require('express');
const router = express.Router();
const controller = require('./speciesControllers');

// BASIC CRUD

router.get("/", controller.getAllSpecies);
router.get("/:id", controller.getSpeciesById);
router.post("/create", controller.createSpecies);
router.put("/update/:id", controller.updateSpecies);
router.delete("/delete/:id", controller.deleteSpecies);

module.exports = router;