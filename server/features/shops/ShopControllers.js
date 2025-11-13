//--- SHOP CONTROLLERS

const shopServices = require("./shopServices");

exports.getAllShops = async (req, res) => {
    try {
        const shops = await shopServices.findAll();
        res.json(shops);
    } catch (err) {
        console.error('getAllShops Failed. shopController.js', err);
    }
};

exports.getShopById = async (req, res) => {
    try {
        const shop = await shopServices.findById(req.params.id);
        res.json(shop);
    } catch (err) {
        console.error('getShopById Failed. shopController.js', err);
    }
};

exports.createShop = async (req, res) => {
    try {
        const created = await shopServices.create(req.body);
        res.json(created);
    } catch (err) {
        console.error('createShop Failed. shopController.js', err);
    }
};

exports.updateShop = async (req, res) => {
    try {
        const updated = await shopServices.update(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        console.error('updateShop Failed. shopController.js', err);
    }
};

exports.deleteShop = async (req, res) => {
    try {
        const deleted = await shopServices.remove(req.params.id);
        res.json(deleted);
    } catch (err) {
        console.error('deleteShop Failed. shopController.js', err);
    }
};
