// User Services

const UserModel = require('../userModel');
const userModel = require('../userModel');

   async function getInventory(userId){
        try{
        const user = await userModel.findById(userId).select("inventory"); // return user document with only inventory field
        if (!user) throw new Error("User not found");
        return user.inventory;
        }catch (err){
        console.error("getInventory failed. userInventoryServices.js", err);
        throw err;
        }
    }

    async function checkInventory(userId, itemId){
        try{
            const user = await userModel.findById.select("inventory");
            if(!user){ throw new Error ("User not found");}
            const item = user.inventory.find( inv => inv.itemId.toString() === itemId );
            return item; // if no item returns null
        }catch (err) {
            console.error("checkInventory Failed. inventoryServices.js");
            throw err;
        }
    }

    async function addItem(userId, itemId, quantity){
        try{
            // get user and inventory
            const user = await userModel.findById(userId).select("inventory");

            if(!user){
                throw new Error("User not found");
            }

            // check if item exists

            const existingItem = user.inventory.find(
                inv => inv.itemId.toString() === itemId
            )

            if(existingItem){
                throw new Error ("item already exists. use updateQuantity instead.");
            }else{
                user.inventory.push({
                    itemId,
                    quantity
                })
            }

            const result = await user.save();
            return result;
        }catch (err){
            console.error("addItem Failed. userInventoryServices.js", err);
            throw err;
        }
    }

async function removeItem(userId, itemId) {
    try {
        // Use $pull to remove elements from the inventory array that match the criteria
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $pull: { inventory: { itemId: itemId } } }, // Remove items where itemId matches
            { new: true } // Return the updated document
        ).select("inventory"); // Select only the inventory field for the return value

        if (!updatedUser) {
            throw new Error("User not found.");
        }
        
        return updatedUser; // Returns the updated user object with the modified inventory

    } catch (err) {
        console.error("deleteItem Failed. userInventoryServices.js", err);
        throw err;
    }
}


    async function updateQuantity(userId,itemId,quantity){
        try{ 
        // get user
        const user = await userModel.findById(userId).select("inventory");
        if(!user){ throw new Error("User not found.");}

        const item = user.inventory.find(
            inv => inv.itemId.toString() === itemId
        );
        if(!item){ throw new Error("Item not found");}
        item.quantity += quantity;

        if(item.quantity <=0 ){
            user.inventory = user.inventory.filter(
                inv => inv.itemId.toString() !== itemId
            )
        }

        const result = await user.save();
        return result;
    }catch (err) {
        console.error("updateQuantity Failed. userInventoryServices.js", err);
        throw err;
    }
    }

    async function clearInventory(userId){
    try{
        const user = await userModel.findById(userId).select("inventory");
        if(!user){ throw new Error("User not found.");}
        user.inventory = [];

        const result = await user.save();
        return result;
    }catch (err) {
        console.error("clearInventory Failed. userInventoryServices.js", err);
        throw err;
    }
    }

module.exports = { getInventory, checkInventory, addItem, removeItem, updateQuantity, clearInventory }