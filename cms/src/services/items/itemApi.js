import api from "../api";


// get all items in items collection
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
export async function getItemById(itemData) {
  try{
    const { itemId } = itemData;
    const response = await api.get(`/items/${itemId}`);
    return response.data;
  }catch (err) {
    console.error("getItemById Failed. itemApi.js", err);
    throw err;
  }
  
}

// get all items of a given item type (via item type id)
export async function getItemsByType(itemTypeData) {
  try{
    const { itemTypeId } = itemTypeData; // item type id
    const response = await api.get(`/items/type/${itemTypeId}`);
    return response.data;
  }catch (err) {
    console.error("getItemsByType Failed. itemsApi.js", err);
    throw err;
  }
} 

// get all types attached to a specific item (via item id)
export async function getTypesByItem(itemData) {
  try{
    const { itemId } = itemData; // item id
    const response = await api.get(`/items/${itemId}/types`);
    return response.data;
  }catch (err) {
    console.error("getTypesByItems Failed. itemApi.js", err);
    throw err;
  }
}

// attach an item type to an item -- test with interface, accepts string instead of object
export async function addItemType(itemData) {
  try{
    const { itemId , itemTypeId } = itemData;
    const response = await api.put(`/items/${itemId}/types/add`, { itemTypeId });
    return response.data;
  }catch (err) {
    console.error("addItemType Failed. itemApi.js", err);
    throw err;
  } 
}

// remove an item type from an item
export async function removeItemType(itemData) {
  try{
    const { itemId, itemTypeId } = itemData;
    const response = await api.put(`/items/${itemId}/types/remove`, { itemTypeId });
    return response.data;
  }catch (err) {
    console.error("removeItemType Failed. itemApi.js", err);
    throw err;
  }
}

// create a new item

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

export async function updateItem(itemData){
  try{
    const { itemId } = itemData;
    const response = await api.put(`/items/${itemId}`, itemData);
    return response.data;
  }catch (err) {
    console.error("updateItem Failed. itemApi.js", err);
    throw err;
  }
}

// delete an item

export async function deleteItem(itemData){
  try{
    const { itemId } = itemData;
    const response = await api.delete(`/items/${itemId}`);
    return response.data;
  }catch (err) {
    console.error("deleteItem Failed. itemApi.js", err);
    throw err;
  }
}
