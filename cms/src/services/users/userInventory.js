import { use } from 'react';
import api from '../api';

//get user inventory (populated)
async function getUserInventory(userData){
    try{
        const { userId } = userData;
        const response = await api.get(`/users/${userId}/inventory`);
        return response.data;
    }catch (err) {
        console.error("getUserInventory Failed. userInventoryApi.js", err);
        throw err;
    }
}

// check user inventory for item. (returns null if item is not in inventory)
async function checkUserInventory(userData){
    try{
        const { userId } = userData;
        const response = await api.get(`/users/${userId}/inventory/check`, userData);
        return response.data
    }catch (err) {
        console.error("checkUserInventory Failed. userInventroyApi.js", err);
        throw err;
    }
}

// add item to user inventory with initial quantity
export async function addUserItem(userData){
    try{
        const { userId } = userData;
        const response = await api.put(`/users/${userId}/inventory/add`, userData);
        return response.data;
    }catch (err) {
        console.error("addUserItem Failed. userInventoryApi.js", err);
        throw err;
    }
}

// remove item from user inventory. (removes full stack regardless of quantity)
export async function removeUserItem(userData){
    try{
        const { userId } = userData;
        const response = await api.put(`/users/${userId}/inventory/remove`, userData);
        return response.data;
    }catch (err) {
        console.error("removeUserItem Failed. userInventoryApi.js", err);
        throw err;
    }
}

// update the quantity of a user inventory item. removes item if quantity < 0
export async function updateUserItemQuantity(userData){
    try{
        const { userId } = userData;
        const response = await api.put(`/users/${userId}/inventory/update`, userData);
        return response.data;
    }catch (err) {
        console.error("updateUserItemQuantity Failed. userInventoryApi.js", err);
        throw err;
    }
}

// clear a user inventory (removes all items)
export async function clearUserInventory(userData){
    try{
        const { userId } = userData;
        const response = await api.put(`/users/${userId}/inventory/clear`);
        return response.data;
    }catch (err) {
        console.error("clearUserInventory Failed. userInventoryApi.js", err);
        throw err;
    }
}