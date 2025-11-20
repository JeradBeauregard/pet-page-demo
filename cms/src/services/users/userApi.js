import api from '../api';

// get all users
export async function getAllUsers(){
    try{
        const response = await api.get('/users');
        return response.data;
    }catch (err) {
        console.error("getAllUsers Failed. userApi.js", err);
        throw err;
    }
}

// get user by id
export async function getUserById(userData){
    try{
        const { userId } = userData;
        const response = await api.get(`/users/${userId}`);
        return response.data;
    }catch (err) {
    console.error("getUserById Failed. userApi.js", err);
    throw err;
    }
}

// create a new user
export async function createUser(userData){
    try{
        const response = await api.post('/users', userData);
        return response.data;
    }catch (err) {
        console.error("createUser Failed. userApi.js", err);
        throw err;
    }
}

// update a user
export async function updateUser(userData){
    try{
        const { userId } = userData;
        const response = await api.put(`/users/${userId}`, userData);
        return response.data;
    }catch (err) {
        console.error("updateUser Failed. userApi.js", err);
        throw err;
    }
}

// delete a user
export async function deleteUser(userData){
    try{
        const { userId } = userData;
        const response = await api.delete(`/users/${userId}`);
        return response.data;
    }catch (err) {
        console.error("deleteUser Failed. userApi.js", err);
        throw err;
    }
}
