const express = require('express');
const router = express.Router();
const controller = require('./userController');

// BASIC CRUD

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUserById);
router.post("/create", controller.createUser);
router.put("/update/:id", controller.updateUser);
router.delete("/delete/:id", controller.deleteUser);

module.exports = router;