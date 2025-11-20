import api from ('../api');

// get all shops
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
export async function updateShop(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.put(`/shops/${shopId}`, shopData);
        return response.data;
    }catch (err) {
        console.error("createShop Failed. shopApi.js", err);
        throw err;
    }
}

// delete a shop
export async function deleteShop(shopData){
    try{
        const { shopId } = shopData;
        const response = await api.delete(`/shops/${shopId}`);
        return response.data;
    }catch (err){
        console.error("deleteItem Failed. shopApi.js", err);
        throw err;
    }
}

//add item type to a shop
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