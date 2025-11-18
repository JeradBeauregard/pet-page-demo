// -- SHOP CONTROLLERS

const { request } = require('express');
const shopInventoryService = require('./shopInventoryServices');

exports.getInventory = async (req, res) => {
    try{
        const item = await shopInventoryService.getInventory(req.params.shopId);
        res.json(item);
    }catch (err) {
        console.error("getInventory Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.checkInventory = async (req, res) => {
    try{
        const item = await shopInventoryService.checkInventory(req.params.shopId, request.body.itemId);
        res.json(item);
    }catch (err) {
        console.error("checkInventory Failed. shopInventoryControllers.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.addItem = async (req, res) => {
    try{
        const item = await shopInventoryService.addItem(req.params.shopId, req.body.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("addItem Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.removeItem = async (req, res) => {
    try{
        const item = await shopInventoryService.removeItem(req.params.shopId, req.body.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("deleteItem Failed. shopInventoryController.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.updateQuantity = async (req, res) => {
    try{
        const item = await shopInventoryService.updateQuantity(req.params.shopId, req.body.itemId, req.body.quantity);
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

