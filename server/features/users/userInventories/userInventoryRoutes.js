const express = require('express');
const router = express.Router();
const controller = require('./userInventoryControllers');

// Inventory Routers use custom logic. Basic CRUD does not apply

router.get("/:userId/inventory", controller.getInventory); // get inventory for a single user
router.post("/:userId/inventory/add/:itemId", controller.addItem); // add and item (itemId, quantity) to a user inventory
router.delete("/:userId/inventory/delete/:itemId", controller.deleteItem); // delete an item (itemId, quantity) from a user inventory
router.put("/:userId/inventory/updateQuantity/:itemId", controller.updateQuantity); // update quantity of an item

// User Controller

const inventoryServices = require("./userInventoryServices");

exports.getInventory = async (req, res) =>{
    try{
        const inventory = await inventoryServices.getInventory(req.params.userId);
        res.json(inventory);
    }catch (err) {
        console.error("Get Inventory Failed. userInventoryControllers.js", err);
    }
}

exports.addItem = async (req, res) =>{
    try{
        const item = await inventoryServices.addItem(req.params.userId, req.params.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("Add Item Failed. inventoryController.js", err);
    }
}

exports.deleteItem = async (req, res) =>{
    try{
        const item = await inventoryServices.deleteItem(req.params.userId, req.params.itemId, req.body.quantity);
        res.json(item);
    }catch (err) {
        console.error("Delete Item Failed. inventoryController.js", err);
    }
}

exports.updateQuantity = async (req, res) =>{
    try{
        const item = await inventoryServices.updateQuantity(req.params.userId, req.params.itemId, req.body.quantity);
        res,json(item);
    }catch (err){
        console.error("updateQuantity Failed. userInventoryServices.js", err);
    }
}

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

module.exports = { getInventory }