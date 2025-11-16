const express = require('express');
const router = express.Router();
const controller = require('./petControllers');

// BASIC CRUD

router.get("/", controller.getAllPets);
router.get("/:id", controller.getPetById);
router.post("/create", controller.createPet);
router.put("/update/:id", controller.updatePet);
router.delete("/delete/:id", controller.deletePet);

// custom logic

router.get("/getPetsByUser/:userId", controller.getPetsByUser);
router.get("/getPetsBySpecies/speciesId", controller.getPetsBySpecies);


module.exports = router;


// controllers

