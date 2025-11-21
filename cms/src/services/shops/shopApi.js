import api from ('../api');

// get all shops
/**
 * 
 * @returns {Promise<Array>} - array of all shop objects
 */
export async function getAllShops(){
    try{
        const response = await api.get('/shops');
        return response.data;
    } catch (err) {
        console.error("getAllShops Failed. shopApi.js", err);
        throw err;
    }
}

//get shop by id
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.id - The shop's ID 
 * @returns {Promise<Object>} - Shop object
 */
export async function getShopById(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.get(`/shops/${shopId}`);
        return response.data;
    }catch (err) {
        console.error("getShopById Failed. shopApi.js", err);
        throw err;
    }
}

//create new shop
/**
 * 
 * @param {Object} shopData - Shop form data
 * @returns {Promise<Object>} - New shop object
 */
export async function createShop(shopData){
    try{
        const response = await api.post('/shops', shopData);
        return response.data;
    }catch (err) {
        console.error("createShop Failed. shopApi.js", err);
        throw err;
    }
}

// update a shop
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.id - The shop's ID
 * @returns {Promise<Object>} - The update shop object
 */
export async function updateShop(shopData){
    try{
        const { id } = shopData;
        const response = await api.put(`/shops/${id}`, shopData);
        return response.data;
    }catch (err) {
        console.error("createShop Failed. shopApi.js", err);
        throw err;
    }
}

// delete a shop
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.id - The shop's ID
 * @returns {Promise<Object>} - The deleted shop object
 */
export async function deleteShop(shopData){
    try{
        const { id } = shopData;
        const response = await api.delete(`/shops/${id}`);
        return response.data;
    }catch (err){
        console.error("deleteItem Failed. shopApi.js", err);
        throw err;
    }
}

//add item type to a shop
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.shopId - The shop's ID
 * @param {string} shopData.ItemTypeId - The new item type's ID
 * @returns {Promise<Object>} - The updated shop object
 */
export async function addItemType(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}/itemtypes/add`, shopData);
        return response.data;
    }catch (err) {
        console.error("addItemType Failed. shopApi.js", err);
        throw err;
    }
}

// remove item from shop
/**
 * 
 * @param {Object} shopData - Shop form data
 * @param {string} shopData.shopId - The shop's ID
 * @param {string} shopData.ItemTypeId - The new item type's ID
 * @returns {Promise<Object>} - The updated shop object
 */
export async function removeItemType(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}/itemtypes/remove`, shopData);
        return response.data;
    }catch (err) {
        console.error("removeItemType Failed. shopApi.js", err);
        throw err;
    }
}