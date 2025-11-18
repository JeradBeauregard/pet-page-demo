const express = require('express');
const router = express.Router();
const controller = require('./itemTypeControllers');

// BASIC CRUD

router.get("/", controller.getAllItemTypes);
router.get("/:id", controller.getItemTypeById);
router.post("/", controller.createItemType);
router.put("/:id", controller.updateItemType);
router.delete("/:id", controller.deleteItemType);


module.exports = router;