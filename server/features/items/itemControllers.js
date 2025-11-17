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

