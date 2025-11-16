const express = require('express');
const router = express.Router();
const controller = require('./userInventoryControllers');

// Inventory Routers use custom logic. Basic CRUD does not apply

router.get("/:userId/inventory", controller.getInventory); // get inventory for a single user
router.post("/:userId/inventory/add/:itemId", controller.addItem); // add and item (itemId, quantity) to a user inventory
router.put("/:userId/inventory/delete/:itemId", controller.deleteItem); // delete an item (itemId, quantity) from a user inventory
router.put("/:userId/inventory/updateQuantity/:itemId", controller.updateQuantity); // update quantity of an item
router.put("/:userId/inventory/clearInventory", controller.clearInventory); // clear entire inventory of a user.



