const express = require('express');
const router = express.Router();
const controller = require('./ShopControllers');

// BASIC CRUD

router.get("/", controller.getAllShops);
router.get("/:id", controller.getShopById);
router.post("/create", controller.createShop);
router.put("/update/:id", controller.updateShop);
router.delete("/delete/:id", controller.deleteShop);

module.exports = router;