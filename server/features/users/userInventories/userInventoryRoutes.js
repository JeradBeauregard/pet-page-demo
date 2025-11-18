const express = require('express');
const router = express.Router();
const controller = require('./userInventoryControllers');

// Inventory Routers use custom logic. Basic CRUD does not apply

router.get("/:userId/inventory", controller.getInventory); // get inventory for a single user
router.get("/:userId/inventory/check", controller.checkInventory); //request body ({itemId}) check inventory for item -- returns item or null
router.post("/:userId/inventory/add", controller.addItem); // request body ({itemId, quantity}) add and item (itemId, quantity) to a user inventory
router.put("/:userId/inventory/remove", controller.removeItem); //request body ({itemId}) remove an item from a user inventory
router.put("/:userId/inventory/update", controller.updateQuantity); //request body ({itemId, quantity}) update quantity of an item
router.put("/:userId/inventory/clear", controller.clearInventory); // clear entire inventory of a user.




