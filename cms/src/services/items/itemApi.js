import api from "../api";


// get all items in items collection
/**
 * 
 * @returns {Promise<Array>} - Array of all items
 */
export async function getAllItems() {
  try{
    const response = await api.get("/items");
    return response.data;
  }catch (err) {
    console.error("getItemsFailed. itemApi.js", err);
    throw err;
  }
}

// get an item by item id from the items collection
/**
 * 
 * @param {Object} itemData - Form data
 * @param {string} itemData.id - The item's ID
 * @returns {Promise<Object>} - Item object
 */
export async function getItemById(itemData) {
  try{
    const { id } = itemData;
    const response = await api.get(`/items/${id}`);
    return response.data;
  }catch (err) {
    console.error("getItemById Failed. itemApi.js", err);
    throw err;
  }
  
}

// get all items of a given item type (via item type id)
/**
 * 
 * @param {Object} itemTypeData - Form data
 * @param {string} itemTypeData.id - The item Type Id
 * @returns {Promise<Object>} - Array of items
 */
export async function getItemsByType(itemTypeData) {
  try{
    const { id } = itemTypeData; // item type id
    const response = await api.get(`/items/type/${id}`);
    return response.data;
  }catch (err) {
    console.error("getItemsByType Failed. itemsApi.js", err);
    throw err;
  }
} 

// get all types attached to a specific item (via item id)
/**
 * 
 * @param {Object} itemData - Form data
 * @param itemData.id - The Item's ID
 * @returns {Promise<Object>} - Array of item types
 */
export async function getTypesByItem(itemData) {
  try{
    const { id } = itemData; // item id
    const response = await api.get(`/items/${id}/types`);
    return response.data;
  }catch (err) {
    console.error("getTypesByItems Failed. itemApi.js", err);
    throw err;
  }
}

// attach an item type to an item -- test with interface, accepts string instead of object
/**
 * 
 * @param {Object} itemData - Form data
 * @param {string} itemData.itemId - The item's ID
 * @param {string} itemData.itemTypeId - The item type's ID
 * @returns {Promise<Object>} - The updated item object
 */
export async function addItemType(itemData) {
  try{
    const { itemId } = itemData;
    const response = await api.put(`/items/${itemId}/types/add`, itemData);
    return response.data;
  }catch (err) {
    console.error("addItemType Failed. itemApi.js", err);
    throw err;
  } 
}

// remove an item type from an item
/**
 * 
 * @param {Object} itemData - Form Data
 * @param {string} itemData.itemId - The item's ID
 * @param {string} itemData.itemId - The item types ID
 * @returns {Promise<Object>} - Updated Item object
 */
export async function removeItemType(itemData) {
  try{
    const { itemId } = itemData;
    const response = await api.put(`/items/${itemId}/types/remove`, itemData);
    return response.data;
  }catch (err) {
    console.error("removeItemType Failed. itemApi.js", err);
    throw err;
  }
}

// create a new item
/**
 * 
 * @param {Obect} itemData - Form Data 
 * @returns {Promise<Object>} - The newly created item
 */

export async function createItem(itemData){
  try{
    const response = await api.post('/items', itemData);
    return response.data;
  }catch (err) {
    console.error("createItem Failed. itemApi.js", err);
    throw err;
  }
}

// update an item
/**
 * 
 * @param {Object} itemData - Form Data
 * @param {string} itemData.id - The item's ID 
 * @returns {Promise<Object>} - The updated item
 */
export async function updateItem(itemData){
  try{
    const { id } = itemData;
    const response = await api.put(`/items/${id}`, itemData);
    return response.data;
  }catch (err) {
    console.error("updateItem Failed. itemApi.js", err);
    throw err;
  }
}

// delete an item
/**
 * 
 * @param {Object} itemData - Form data
 * @param {string} itemData.id - The item's ID
 * @returns {Promise<Object>} - The deleted item
 */

export async function deleteItem(itemData){
  try{
    const { id } = itemData;
    const response = await api.delete(`/items/${id}`);
    return response.data;
  }catch (err) {
    console.error("deleteItem Failed. itemApi.js", err);
    throw err;
  }
}
