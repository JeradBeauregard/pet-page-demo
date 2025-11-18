//--- ITEM CONTROLLER

const itemServices = require("./itemServices")

exports.getAllItems = async (req, res) => {
    try{
    const items = await itemServices.findAll();
    res.json(items);
    }catch (err) {
        console.error('getAllItems Failed. ItemController.js', err);
        res.status(500).json({ error: err.message });
    }
}

exports.getItemById = async (req, res) => {
    try{
        const item = await itemServices.findById(req.params.id);
        res.json(item);
    }catch (err) {
        console.error('getItemById Failed. ItemController.js', err);
        res.status(500).json({ error: err.message });
    }
}

exports.createItem = async (req, res) => {
    try{
        const item = await itemServices.create(req.body);
        res.json(item); // might change to service response instead
    }catch (err){
        console.error('createItem failes. ItemController.js', err);
        res.status(500).json({ error: err.message });
    }
}

exports.updateItem = async (req, res) => {
    try{
        const item = await itemServices.update(req.params.id, req.body);
        res.json(item);
    }catch (err){
        console.error('updateItem Failed. itemController.js', err);
        res.status(500).json({ error: err.message });
    }
}

exports.deleteItem = async (req, res) => {
    try{
        const item = await itemServices.remove(req.params.id);
        res.json(item);
    }catch (err) {
        console.error('deleteItem Failed. itemController.js', err);
        res.status(500).json({ error: err.message });
    }
}

// custom logic controllers

exports.addItemType = async (req, res) => {
    try{
        const item = await itemServices.addItemType(req.params.itemId,req.body.itemTypeId);
        res.json(item);
    }catch (err) {
        console.error("addItemType Failed. itemControllers.js", err);
        res.status(500).json({ error: err.message });
    }

}

exports.removeItemType = async (req, res) => {
    try{
        const item = await itemServices.removeItemType(req.params.itemId, req.body.itemTypeId);
        res.json(item);
    }catch (err) {
        console.error("removeItemType Failed. itemControllers.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.getItemsByType = async (req, res) => {
    try{
        const items = await itemServices.getItemsByType(req.params.itemTypeId);
        res.json(items);

    }catch (err) {
        console.error("getItemsByType Failed. itemControllers.js", err);
        res.status(500).json({ error: err.message });
    }
}

exports.getTypesByItem = async (req, res) => {
    try{
        const types = await itemServices.getTypesByItems(req.params.itemTypeId);
        res.json(types);
    }catch (err) {
        console.error("getTypesByItems Failed. itemControllers.js", err);
        res.status(500).json({ error: err.message });
    }
}
