//--- SHOP CONTROLLERS

// base CRUD controllers

const shopServices = require("./shopServices");

exports.getAllShops = async (req, res) => {
    try {
        const shops = await shopServices.findAll();
        res.json(shops);
    } catch (err) {
        console.error('getAllShops Failed. shopController.js', err);
        res.status(500).json({ error: err.message });
    }
};

exports.getShopById = async (req, res) => {
    try {
        const shop = await shopServices.findById(req.params.id);
        res.json(shop);
    } catch (err) {
        console.error('getShopById Failed. shopController.js', err);
        res.status(500).json({ error: err.message });
    }
};

exports.createShop = async (req, res) => {
    try {
        const created = await shopServices.create(req.body);
        res.json(created);
    } catch (err) {
        console.error('createShop Failed. shopController.js', err);
        res.status(500).json({ error: err.message });
    }
};

exports.updateShop = async (req, res) => {
    try {
        const updated = await shopServices.update(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        console.error('updateShop Failed. shopController.js', err);
        res.status(500).json({ error: err.message });
    }
};

exports.deleteShop = async (req, res) => {
    try {
        const deleted = await shopServices.remove(req.params.id);
        res.json(deleted);
    } catch (err) {
        console.error('deleteShop Failed. shopController.js', err);
        res.status(500).json({ error: err.message });
    }
};

//-- custom logic controllers

exports.addItemType = async (req, res) => {
    try{
        const itemType = await shopServices.addItemType(req.params.shopId, req.body.itemTypeId);
        res.json(itemType);
    }catch (err) {
        console.error("addItemType Failed. shopServices.js", err);
        res.status(500).json({ error: err.message });
    }
}


exports.removeItemType = async (req, res) => {
    try{
        const itemType = await shopServices.removeItemType(req.params.shopId, req.body.itemTypeId);
        res.json(itemType);
    }catch (err) {
        console.error("removeItemType Failed. shopServices.js", err);
        res.status(500).json({ error: err.message });
    }
}
