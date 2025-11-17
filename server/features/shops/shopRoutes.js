const express = require('express');
const router = express.Router();
const controller = require('./ShopControllers');
const shopServices = require('./shopServices');

// BASIC CRUD

router.get("/", controller.getAllShops);
router.get("/:id", controller.getShopById);
router.post("/create", controller.createShop);
router.put("/update/:id", controller.updateShop);
router.delete("/delete/:id", controller.deleteShop);

// Custom logic

router.put("/:shopId/addItemType/:itemTypeId", controller.addItemType); // add item type to a shop
router.put("/:shopId/removeItemType/itemTypeId", controller.removeItemType); // remove item type from a shop


module.exports = router;




