import api from '../api';

// get all item types
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
export async function getItemTypeById(itemTypeData){
    try{
        const { itemTypeId } = itemTypeData;
        const response = await api.get(`/itemTypes/${itemTypeId}`);
        return response.data;
    }catch (err) {
        console.error("getItemTypeById Failed. itemTypeApi.js", err);
        throw err;
    }
}

// create a new item type
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
export async function updateItemType(itemTypeData){
    try{
        const { itemTypeId } = itemTypeData;
        const response = await api.put(`/itemTypes/${itemTypeId}`, itemTypeData);
        return response.data;
    } catch (err) {
        console.error("updateItemType Failed. itemTypeApi.js", err);
        throw err;
    }
}

// delete an item type
export async function deleteItemType(itemTypeData){
    try{
        const { itemTypeId } = itemTypeData;
        const response = await api.delete(`/itemTypes/${itemTypeId}`);
        return response.data;
    }catch (err) {
        console.error("deleteItemType Failed. ItemTypeApi.js", err);
        throw err;
    }
}