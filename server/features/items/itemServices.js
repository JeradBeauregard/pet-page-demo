const Item = require('./itemModel');
const Base = require('../../utils/baseService');

// custom logic servies

async function addItemType(itemId, itemTypeId){
    try{
        const item = await Item.findById(itemId).select('type');
        if(!item){ throw new Error ("Item not found.");}
        const existingType = item.type.find( type => type.toString() === itemTypeId);
        if(existingType){ throw new Error("Type already attached to Item.");}
        else{
            item.type.push(itemTypeId);
            const result = await item.save();
            return result;
        }
    }catch (err) {
        console.error("addItemType Failed. itemServices.js", err);
    }
}

async function removeItemType(itemId, itemTypeId){
    try{
        const item = await Item.findById(itemId).select('type');
        if(!item){ throw new Error ("item not found.");}
        const type = item.type.find(type => type.toString() === itemTypeId);
        if(!type){ throw new Error ("Type not attached to Item.");}
        else{
            item.type = item.type.filter(type => type.toString() !== itemTypeId);
            const result = await item.save();
            return result;
        }
    } catch (err){
        console.error("removeItem Failed. itemServices.js", err);
    }
}

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

    ...Base(Item), // base crud
    addItemType,
    removeItemType,
    getItemsByType,
    getTypesByItem

    // custom service logic
}