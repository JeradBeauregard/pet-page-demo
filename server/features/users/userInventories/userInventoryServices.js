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
                existingItem.quantity += quantity;
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

    async function deleteItem(userId, itemId, quantity){
        const user = await userModel.findById(userId).select("inventory");
        if(!user){
            throw new Error("User not found.");
        }
        
        const item = user.inventory.find(
            inv => inv.itemId.toString() === itemId
        )

        if(!item){
            throw new Error("Item not found");
        }

        item.quantity -= quantity;
        if(item.quantity <= 0){
            // delete item from document instance
            user.inventory = user.inventory.filter( // mongoose prefers filter over splice for validation
                inv => inv.itemId.toString() !== itemId  // if item quantity is 0 filter all other items out except that one to remove
            )
        }

        const result = await user.save();
        return result;
    }


    async function updateQuantity(userId,itemId,quantity){

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
    }

    async function clearInventory(userId){
        const user = await userModel.findById(userId).select("inventory");
        if(!user){ throw new Error("User not found.");}
        user.inventory = [];

        const result = await user.save();
        return result;
    }

module.exports = { getInventory, addItem, deleteItem, updateQuantity, clearInventory }