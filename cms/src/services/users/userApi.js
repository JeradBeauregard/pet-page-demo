import api from "../api";

/**
 * Fetch all users.
 * @returns {Promise<Array>} - List of all users
 */
export async function getAllUsers(){
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (err) {
        console.error("getAllUsers Failed. userApi.js", err);
        throw err;
    }
}

/**
 * Fetch a single user by ID.
 * @param {Object} userData - Object containing user information
 * @param {string} userData.id - The User's ID
 * @returns {Promise<Object>} - User document
 */
export async function getUserById(userData){
    try {
        const { id } = userData;
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (err) {
        console.error("getUserById Failed. userApi.js", err);
        throw err;
    }
}

/**
 * Create a new user.
 * @param {Object} userData - Form data for new user
 * @returns {Promise<Object>} - Newly created user
 */
export async function createUser(userData){
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (err) {
        console.error("createUser Failed. userApi.js", err);
        throw err;
    }
}

/**
 * Update a user.
 * @param {Object} userData - { ...fields to update }
 * @param {string} userData.id - The user's ID
 * @returns {Promise<Object>} - Updated user
 */
export async function updateUser(userData){
    try {
        const { id } = userData;
        const response = await api.put(`/users/${id}`, userData);
        return response.data;
    } catch (err) {
        console.error("updateUser Failed. userApi.js", err);
        throw err;
    }
}

/**
 * Delete a user.
 * @param {Object} userData - { id: string }
 * @returns {Promise<Object>} - Deleted user object
 */
export async function deleteUser(userData){
    try {
        const { id } = userData;
        const response = await api.delete(`/users/${id}`);
        return response.data;
    } catch (err) {
        console.error("deleteUser Failed. userApi.js", err);
        throw err;
    }
}
