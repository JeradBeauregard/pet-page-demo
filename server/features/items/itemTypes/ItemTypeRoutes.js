const express = require('express');
const router = express.Router();
const controller = require('./itemTypeControllers');

// BASIC CRUD

router.get("/", controller.getAllItemTypes);
router.get("/:id", controller.getItemTypeById);
router.post("/create", controller.createItemType);
router.put("/update/:id", controller.updateItemType);
router.delete("/delete/:id", controller.deleteItemType);


module.exports = router;