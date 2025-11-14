const express = require('express');
const router = express.Router();
const controller = require('./petControllers');

// BASIC CRUD

router.get("/", controller.getAllPets);
router.get("/:id", controller.getPetById);
router.post("/create", controller.createPet);
router.put("/update/:id", controller.updatePet);
router.delete("/delete/:id", controller.deletePet);

module.exports = router;