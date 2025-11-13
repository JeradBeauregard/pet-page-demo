const express = require('express');
const router = express.Router();
const controller = require('./petControllers');

// BASIC CRUD

router.get("/", controller.getAllPets);
router.get("/:id", controller.getPetById);
router.post("/", controller.createPet);
router.put("/:id", controller.updatePet);
router.delete("/:id", controller.deletePet);

module.exports = router;