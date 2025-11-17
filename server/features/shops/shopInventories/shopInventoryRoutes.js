// -- SHOP INVENTORY ROUTES

const controller = require('./ShopInventoryControllers');

router.get("/:shopId/inventory", controller.getInventory);
router.post("/:shopId/inventory/add/:itemId", controller.addItem);
router.put("/:shopId/inventory/delete/:itemId", controller.deleteItem);
router.put("/:shopId/inventory/updateQuantity/:itemId", controller.updateQuantity);
router.put("/:shopId/inventory/clearInventory", controller.clearInventory);

