// -- SHOP CONTROLLERS

const shopInventoryService = require('./shopInventoryServices');

exports.getInventory = async (req, res) => {
    try{
        const item = await shopInventoryService.getInventory(req.params.shopId);
        res.json(item);
    }catch (err){
        console.error("getInventory Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.addItem = async (req, res) => {
    try{
        const item = await shopInventoryService.addItem(req.params.shopId, req.params.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("addItem Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.deleteItem = async (req, res) => {
    try{
        const item = await shopInventoryService.deleteItem(req.params.shopId, req.params.itemId);
        res.json(item);
    }catch (err) {
        console.error("deleteItem Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.updateQuantity = async (req, res) => {
    try{
        const item = await shopInventoryService.updateQuantity(req.params.shopId, req.params.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("updateQuantity Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.clearInventory = async (req, res) => {
    try{
        const inventory = await shopInventoryService.clearInventory(req.params.shopId);
        res.json(inventory);
    }catch (err) {
        console.error("clearInventory Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

