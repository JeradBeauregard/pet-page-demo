const express = require('express');
const router = express.Router();
const controller = require('./itemControllers');

//route: /items
// BASIC CRUD

router.get("/", controller.getAllItems);
router.get("/:id", controller.getItemById);
router.post("/", controller.createItem);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

// custom logic routes

router.put("/:itemId/types/add", controller.addItemType); //request body ({itemTypeId}) add a type to an item
router.put("/:itemId/types/remove", controller.removeItemType); // request body ({itemTypeId}) remove a type from and item
router.get("/type/:itemTypeId", controller.getItemsByType); // get all items of a type
router.get("/:itemId/types", controller.getTypesByItem); // get all types attached to an item


module.exports = router;
