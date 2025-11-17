//-- Shop Inventory Services

const Shop = require('../shopModel');
const Item = require('../../items/itemModel');

async function getInventory(shopId){

    const shop = await Shop.findById(shopId).select("inventory").populate("inventory.itemId");
    if(!shop){ throw new Error ("Shop not found.");}
    return shop.inventory;
}

async function addItem(shopId, itemId, quantity){

    const shop = await Shop.findById(shopId).select("inventory");
    if(!shop){ throw new Error ("Shop not found");}
    
    // search for item in shop inventory
try{
        const existingItem = shop.inventory.find(
            inv => inv.itemId.toString() === itemId
        )
        if(existingItem){
            existingItem.quantity += quantity;
        }else{
            shop.inventory.push({itemId, quantity});
        }

        const result = await shop.save();
        return result;
    }catch (err) {
        console.error("addItem Failed. shopInventoryServices.js", err);
    }
}

async function deleteItem(shopId, itemId) {
try{
    const shop = await Shop.findById(shopId).select("inventory");
    if(!shop){ throw new Error ("Shop not found.");}
    const item = shop.inventory.find(inv => inv.itemId.toString() === itemId);
    if(!item){ throw new Error ("Item not found.");}
    shop.inventory = shop.inventory.filter( inv => inv.itemId.toString() != itemId);
    const result = await shop.save();
    return result;
}catch (err) {
    console.error("deleteItem Failed. shopInventoryServices.js", err);
}
}

async function updateQuantity(shopId, itemId, quantity){
    try{
        const shop = await Shop.findById(shopId).select("inventory");
        if(!shop){ throw new Error ("Shop not found.");}
        const item = shop.inventory.find(inv => inv.itemId.toString() === itemId);
        if(!item){ throw new Error ("Item not found.");}
        item.quantity += quantity;
        if(item.quantity <= 0){
            shop.inventory = shop.inventory.filter( inv => inv.itemId.toString() != itemId);
        }
        const result = await shop.save();
        return result;
    }catch (err) {
        console.error("updateQuantity Failed. shopInventoryServices.js", err);
    }
}

async function clearInventory(shopId){
    try{
        const shop = await Shop.findById(shopId).select("inventory");
        if(!shop){ throw new Error ("Shop not found.");}
        shop.inventory = [];
        const result = await shop.save();
        return result;
    }catch (err) {
        console.error("clearInventory Failed. shopInventoryServices.js", err);
    }
}

module.exports = {
    getInventory,
    addItem,
    deleteItem,
    updateQuantity,
    clearInventory
};