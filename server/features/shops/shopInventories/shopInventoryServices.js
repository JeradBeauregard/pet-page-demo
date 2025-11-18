//-- Shop Inventory Services

const Shop = require('../shopModel');
const Item = require('../../items/itemModel');

async function getInventory(shopId){

    const shop = await Shop.findById(shopId).select("inventory").populate("inventory.itemId");
    if(!shop){ throw new Error ("Shop not found.");}
    return shop.inventory;
}

async function checkInventory(shopId, itemId){
    
    try{
        const shop = await Shop.findById(shopId).select("inventory");
        if(!shop){ throw new Error ("Shop not found.");}
        const item = shop.inventory.find( inv => inv.itemId.toString() === itemId );
        return item; // returns null if item not found.
    }catch (err) {
        console.error("checkInventory Failed. shopInventoryServices.js", err);
        throw err;
    }
}

async function addItem(shopId, itemId, quantity){   
try{

    const shop = await Shop.findById(shopId).select("inventory");
    if(!shop){ throw new Error ("Shop not found");}
    
    // search for item in shop inventory
        const existingItem = shop.inventory.find(
            inv => inv.itemId.toString() === itemId
        )
        if(existingItem){
            throw new Error ("Item already exists. Use updateQuantity instead.");
        }else{
            shop.inventory.push({itemId, quantity});
        }

        const result = await shop.save();
        return result;
    }catch (err) {
        console.error("addItem Failed. shopInventoryServices.js", err);
        throw err;
    }
}

async function removeItem(userId, itemId) {
    try {
        // Use $pull to remove elements from the inventory array that match the criteria
        const updatedShop = await Shop.findByIdAndUpdate(
            shopId,
            { $pull: { inventory: { itemId: itemId } } }, // Remove items where itemId matches
            { new: true } // Return the updated document
        ).select("inventory"); // Select only the inventory field for the return value

        if (!updatedShop) {
            throw new Error("User not found.");
        }
        
        return updatedShop; // Returns the updated user object with the modified inventory

    } catch (err) {
        console.error("removeItem Failed. shopInventoryServices.js", err);
        throw err;
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
        throw err;
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
        throw err;
    }
}

module.exports = {
    getInventory,
    checkInventory,
    addItem,
    removeItem,
    updateQuantity,
    clearInventory
};