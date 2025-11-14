const express = require('express');
const router = express.Router();
const controller = require('./itemControllers');

// BASIC CRUD

router.get("/", controller.getAllItems);
router.get("/:id", controller.getItemById);
router.post("/create", controller.createItem);
router.put("/update/:id", controller.updateItem);
router.delete("/delete/:id", controller.deleteItem);

module.exports = router;
