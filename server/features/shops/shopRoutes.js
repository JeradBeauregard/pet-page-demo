const express = require('express');
const router = express.Router();
const controller = require('./ShopControllers');

// BASIC CRUD

router.get("/", controller.getAllShops);
router.get("/:id", controller.getShopById);
router.post("/", controller.createShop);
router.put("/:id", controller.updateShop);
router.delete("/:id", controller.deleteShop);

module.exports = router;