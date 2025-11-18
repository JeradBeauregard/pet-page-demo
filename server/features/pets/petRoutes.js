const express = require('express');
const router = express.Router();
const controller = require('./petControllers');

// route: pets/

// BASIC CRUD

router.get("/", controller.getAllPets);
router.get("/:id", controller.getPetById);
router.post("/", controller.createPet);
router.put("/:id", controller.updatePet);
router.delete("/:id", controller.deletePet);

// custom logic

router.get("/user/:userId", controller.getPetsByUser); // get all pets of a user
router.get("/species/:speciesId", controller.getPetsBySpecies);


module.exports = router;


// controllers

