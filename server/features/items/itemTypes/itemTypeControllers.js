const itemTypeServices = require('./itemTypeServices');

exports.getAllItemTypes = async (req, res) => {
    try{
        const itemTypes = await itemTypeServices.findAll();
        res.json(itemTypes);
    }catch (err) {
        console.error('getAllItemTypes Failed. itemTypeController.js', err);
    }
}

exports.getItemTypeById = async (req, res) => {
    try{
        const itemType = await itemTypeServices.findById(req.params.id);
        res.json(itemType);
    }catch (err) {
        console.error('getItemTypeById Failed. itemTypeController.js', err);
    }
}

exports.createItemType = async (req, res) => {
    try{
        const itemType = await itemTypeServices.create(req.body);
        res.json(itemType);
    }catch (err) {
        console.error('createItemType Failed. itemTypeController.js', err);
    }
}

exports.updateItemType = async (req, res) => {
    try{
        const itemType = await itemTypeServices.update(req.params.id, req.body);1
        res.json(itemType);
    }catch (err) {
        console.error('updateItemType Failed. itemTypeController.js', err);
    }
}

exports.deleteItemType = async (req, res) => {
    try{
        const itemType = await itemTypeServices.remove(req.params.id);
        res.json(itemType);
    }catch (err) {
        console.error('deleteItemType Failed. itemTypeController.js', err);
    } 
}