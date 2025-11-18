// -- SHOP INVENTORY ROUTES

const controller = require('./ShopInventoryControllers');

router.get("/:shopId/inventory", controller.getInventory); // get shop inventory
router.get("/:shopId/inventroy/check", controller.checkInventory); // check shop inventory for an item -- returns item or null
router.post("/:shopId/inventory/add", controller.addItem); // request body ({itemId, quantity}) add item to shop inventory
router.put("/:shopId/inventory/remove", controller.removeItem); //request body ({itemId, quantity}) remove item from shop inventory
router.put("/:shopId/inventory/update", controller.updateQuantity); //request body ({itemId, quantity}) update quantity of item in shop inventory remove if < 0
router.put("/:shopId/inventory/clear", controller.clearInventory); // clear shop inventory


