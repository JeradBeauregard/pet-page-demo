import api from '../api';

//get shop inventory
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.id - the shop's ID
 * @returns {Promise<Object>} - An array of populated inventory items for a user
 */
export async function getShopInventory(shopData){
    try{
        const { id } = shopData;
        const response = await api.get(`/shops/${id}/inventory`);
        return response.data;
    }catch (err) {
        console.error("getShopInventory Failed. shopInventoryApi.js", err);
        throw err;
    }
}

//check shop inventory for item. Returns null if item not found.
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.id - The shop's ID 
 * @returns {Promise<Object|null>} Inventory item or null
 */
export async function checkShopInventory(shopData){
    try{
        const { id } = shopData;
        const response = await api.get(`/shops/${id}/inventory/check`, shopData);
        return response.data;
    }catch (err) {
        console.error("checkShopInventory Failed. shopInventoryApi.js", err);
        throw err;
    }
}

// add item to shop with initial quantity
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.shopId - The shop's ID
 * @param {string} shopData.itemId - The newly added item's ID
 * @param {string} shopData.quantity - The initial quantity of the newly added item
 * @returns {Promise<Object>} - The updated shop inventory
 */
export async function addShopItem(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}/inventory/add`, shopData);
        return response.data;
    }catch (err){
        console.error("addShopItem Failed. shopInventoryApi.js", err);
        throw err;
    }
}

// remove item from shop inventory (removes entire stack regardless of quantity)
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.shopId - The shop's ID
 * @param {string} shopData.itemId - The removed item's ID 
 * @returns {Promise<Object>} - The updated shop inventory
 */
export async function removeShopItem(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}/inventory/remove`, shopData);
        return response.data;
    }catch (err) {
        console.error("removeShopItem Failed. shopInventoryApi.js", err);
        throw err;
    }
}

// adjust quantity of an existing shop item
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.shopId - The shop's ID
 * @param {string} shopData.itemId - the ID of the item to be updated
 * @param {number} shopData.quantity - the quantity of item to be adjusted 
 * @returns {Promise<Object>} - The updated item
 */
export async function updateShopItemQuantity(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}/inventory/update`, shopData);
        return response.data;
    }catch (err) {
        console.error("updateShopItemQuantity Failed. shopInventory.js", err);
        throw err;
    }
}

// clear all items from shop inventory
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.id - The shop's ID
 * @returns {Promise<Object>} - Cleared shop inventory (empty array)
 */
export async function clearShopInventory(shopData){
    try{
        const { id } = shopData;
        const response = await api.put(`/shops/${id}/inventory/clear`);
        return response.data;
    }catch (err) {
        console.error("clearShopInventory Failed. shopInventoryApi.js", err);
        throw err;
    }
}