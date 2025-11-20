import api from '../api';

//get shop inventory
export async function getShopInventory(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.get(`/shops/${shopId}/inventory`);
        return response.data;
    }catch (err) {
        console.error("getShopInventory Failed. shopInventoryApi.js", err);
        throw err;
    }
}

//check shop inventory for item. Returns null if item not found.
export async function checkShopInventory(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.get(`/shops/${shopId}/inventory/check`, shopData);
        return response.data;
    }catch (err) {
        console.error("checkShopInventory Failed. shopInventoryApi.js", err);
        throw err;
    }
}

// add item to shop with initial quantity
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

// clear al items from shop inventory
export async function clearShopInventory(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}/inventory/clear`);
        return response.data;
    }catch (err) {
        console.error("clearShopInventory Failed. shopInventoryApi.js", err);
        throw err;
    }
}