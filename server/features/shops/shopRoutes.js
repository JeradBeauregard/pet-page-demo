const express = require('express');
const router = express.Router();
const controller = require('./ShopControllers');
const shopServices = require('./shopServices');

// BASIC CRUD

router.get("/", controller.getAllShops);
router.get("/:id", controller.getShopById);
router.post("/", controller.createShop);
router.put("/:id", controller.updateShop);
router.delete("/:id", controller.deleteShop);

// Custom logic

router.put("/:shopId/itemtypes/add", controller.addItemType); // request body ({itemTypeId}) add item type to a shop
router.put("/:shopId/itemtypes/remove", controller.removeItemType); // request body ({itemTypeId}) remove item type from a shop


module.exports = router;




