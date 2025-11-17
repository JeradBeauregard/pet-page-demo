const Shop = require('./shopModel');
const Base = require('../../utils/baseService');


// custom logic services

async function addItemType(shopId, itemTypeId){
    try{
        const shop = await Shop.findById(shopId).select("itemTypes");
        if(!shop){ throw new Error ("Shop not found.");}
        const existingType = shop.itemTypes.find( itemType => itemType.toString() === itemTypeId);
        if(existingType){ return "Item Type already exists.";}
        else{
            shop.itemTypes.push({itemTypeId});
            const result = await shop.save();
            return result;
        }
    }catch (err) {
        console.error("addItemType Failed. shopServices.js", err);
    }
}

async function removeItemType(shopId, itemTypeId){
    try{
        const shop = await Shop.findById(shopId).select("itemTypes");
        if(!shop){ throw new Error ("Shop not found.");}
        const type = shop.itemTypes.find( itemType => itemType.toString() === itemTypeId);
        if(!type){ throw new Error ("Item Type not found.");}
        else{
            shop.itemTypes = shop.itemTypes.filter( itemType => itemType.toString() != itemTypeId);
            const result = await shop.save();
            return result;
        }
    }catch (err) {
        console.error("removeItemType Failed. shopServices.js", err);
    }
}

module.exports = {

    //Basic CRUD through Utils Template

    ...Base(Shop), // base crud template
    addItemType,
    removeItemType
}