import api from '../api';

// get all item types
/**
 * 
 * @returns {Promise<Array>} - Array of all item types
 */
export async function getAllItemTypes(){
    try{
        const response = await api.get('/itemTypes');
        return response.data;
    }catch (err) {
        console.error("getAllItemTypes Failed. itemTypeApi.js", err);
        throw err;
    }
}

// get an item type by id
/**
 * 
 * @param {Object} itemTypeData - Form data
 * @param {string} itemTypeData.id - The itemType's ID
 * @returns {Promise<Object>} - Item type object
 */
export async function getItemTypeById(itemTypeData){
    try{
        const { id } = itemTypeData;
        const response = await api.get(`/itemTypes/${id}`);
        return response.data;
    }catch (err) {
        console.error("getItemTypeById Failed. itemTypeApi.js", err);
        throw err;
    }
}

// create a new item type
/**
 * 
 * @param {Object} itemTypeData - Form data
 * @returns {Promise<Object>} - The newly created item type
 */
export async function createItemType(itemTypeData){
    try{
        const response = await api.post('/itemTypes', itemTypeData);
        return response.data;
    }catch (err) {
        console.error ("createItemType Failed. itemTypeApi.js", err);
        throw err;
    }
}

// update an item type
/**
 * 
 * @param {Object} itemTypeData - Form data
 * @param {string} itemTypeData.id - The itemType's ID
 * @returns {Promise<Object>} - The updated item type
 */
export async function updateItemType(itemTypeData){
    try{
        const { id } = itemTypeData;
        const response = await api.put(`/itemTypes/${id}`, itemTypeData);
        return response.data;
    } catch (err) {
        console.error("updateItemType Failed. itemTypeApi.js", err);
        throw err;
    }
}

// delete an item type
/**
 * 
 * @param {Object} itemTypeData - Form data
 * @param {string} itemTypeData.id - The itemType's ID
 * @returns {Promise<Object>} - The deleted item type
 */
export async function deleteItemType(itemTypeData){
    try{
        const { id } = itemTypeData;
        const response = await api.delete(`/itemTypes/${id}`);
        return response.data;
    }catch (err) {
        console.error("deleteItemType Failed. ItemTypeApi.js", err);
        throw err;
    }
}