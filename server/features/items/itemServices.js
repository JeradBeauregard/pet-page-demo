const Model = require('./itemModel');
const Base = require('../../utils/baseService');

// custom logic servies

async function getItemsByType(itemTypeId){
    try{
        const items = await Item.find({ itemTypes: itemTypeId});
        return items;
    }catch (err) {
        console.error("getItemsByType Failed. itemServices.js");
    }
}

async function getTypesByItem(itemId){
    try{
        const item = await Item.findById(itemId).select('itemTypes').populate('itemTypes');
        return item.itemTypes;
    }catch (err) {
        console.error("getTypesByItem Failed. itemServices.js", err);
    }
}


module.exports = {

    // Basic CRUD through Utils Template

    ...Base(Model), // base crud
    getItemsByType,
    getTypesByItem

    // custom service logic
}