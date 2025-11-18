// User Controller

const inventoryServices = require("./userInventoryServices");

exports.getInventory = async (req, res) =>{
    try{
        const inventory = await inventoryServices.getInventory(req.params.userId);
        res.json(inventory);
    }catch (err) {
        console.error("Get Inventory Failed. userInventoryControllers.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.checkInventory = async (req, res) => {
    try{
        const item = await inventoryServices.checkInventory(req.params.userId, req.body.itemId);
        res.json(item);
    }catch (err) {
        console.error("checkInventory Failed. userInventoryControllers.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.addItem = async (req, res) =>{
    try{
        const item = await inventoryServices.addItem(req.params.userId, req.body.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("Add Item Failed. inventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.removeItem = async (req, res) =>{
    try{
        const item = await inventoryServices.removeItem(req.params.userId, req.body.itemId);
        res.json(item);
    }catch (err) {
        console.error("Delete Item Failed. inventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.updateQuantity = async (req, res) =>{
    try{
        const item = await inventoryServices.updateQuantity(req.params.userId, req.body.itemId, req.body.quantity);
        res,json(item);
    }catch (err){
        console.error("updateQuantity Failed. userInventoryServices.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.clearInventory = async (req, res) =>{
    try{
        const inventory = inventoryServices.clearInventory(userId);
        res.json(inventory);
    }catch (err) {
        console.erroy("clearInventory Failed. userInventoryServices.js", err);
        res.status(500).json({ error: err.message });
    }
}
