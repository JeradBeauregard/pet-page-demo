const express = require('express');
const router = express.Router();
const controller = require('./petControllers');

// custom logic FIRST
router.get("/user/:userId", controller.getPetsByUser);
router.get("/species/:speciesId", controller.getPetsBySpecies);

// BASIC CRUD (generic routes LAST)
router.get("/", controller.getAllPets);
router.post("/", controller.createPet);
router.put("/:id", controller.updatePet);
router.delete("/:id", controller.deletePet);

// MUST BE LAST
router.get("/:id", controller.getPetById);

module.exports = router;


