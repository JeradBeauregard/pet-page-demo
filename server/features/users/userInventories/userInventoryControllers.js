// User Controller

const inventoryServices = require("./userInventoryServices");

exports.getInventory = async (req, res) =>{
    try{
        const inventory = await inventoryServices.getInventory(req.params.userId);
        res.json(inventory);
    }catch (err) {
        console.error("Get Inventory Failed. userInventoryControllers.js", err);
    }
}

exports.addItem = async (req, res) =>{
    try{
        const item = await inventoryServices.addItem(req.params.userId, req.params.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("Add Item Failed. inventoryController.js", err);
    }
}

exports.deleteItem = async (req, res) =>{
    try{
        const item = await inventoryServices.deleteItem(req.params.userId, req.params.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("Delete Item Failed. inventoryController.js", err);
    }
}

exports.updateQuantity = async (req, res) =>{
    try{
        const item = await inventoryServices.updateQuantity(req.params.userId, req.params.itemId, req.body.quantity);
        res,json(item);
    }catch (err){
        console.error("updateQuantity Failed. userInventoryServices.js", err);
    }
}

exports.clearInventory = async (req, res) =>{
    try{
        const inventory = inventoryServices.clearInventory(userId);
        res.json(inventory);
    }catch (err) {
        console.erroy("clearInventory Failed. userInventoryServices.js", err);
    }
}
