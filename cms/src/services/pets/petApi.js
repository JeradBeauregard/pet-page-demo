import api from '../api';

// get all pets
/**
 * 
 * @returns {Promise<Array>} - An array of all pet objects
 */
export async function getAllPets(){
    try{
        const response = await api.get('/pets');
        return response.data;
    }catch (err) {
        console.error("getAllPets Failed. petApi.js", err);
        throw err;
    }
}

// get a pet by id
/**
 * 
 * @param {Object} petData - Pet form data
 * @param {string} petData.id - The pet's ID
 * @returns {Promise<Object>} - Pet Object
 */
export async function getPetById(petData){
    try{
        const { id } = petData;
        const response = await api.get(`/pets/${id}`);
        return response.data;
    }catch (err) {
        console.error("getPetById Failed. petApi.js", err);
        throw err;
    }
}

// get all pets belonging to a user (by user id)
/**
 * 
 * @param {Object} userData - form data
 * @param {string} userData.id - The user's ID
 * @returns {Promise<Object>} - Array of pet objects
 */
export async function getPetsByUser(userData){
    try{
        const { id } = userData;
        const response = await api.get(`/pets/user/${id}`);
        return response.data;
    }catch (err){
        console.error("getPetsByUser Failed. petApi.js", err);
        throw err;
    }
}

//get all pets belonging to a species (by species id)
/**
 * 
 * @param {Object} speciesData - form data
 * @param {string} speciesData.id - The specie's ID
 * @returns {Promise<Array>} - Array of pet objects
 */
export async function getPetsBySpecies(speciesData){
    try{
        const { id } = speciesData;
        const response = await api.get(`/pets/species/${id}`);
        return response.data;
    }catch (err){
        console.error("getPetsBySpecies Failed. PetApi.js", err);
        throw err;
    }
}

// create a new pet
/**
 * 
 * @param {Object} petData - Form data
 * @returns {Promise<Object>} - Newly created pet object
 */
export async function createPet(petData){
    try{
        const response = await api.post('/pets',petData);
        return response.data;
    }catch (err){
        console.error("createPet Failed. petApi.js", err);
        throw err;
    }
}

// update a pet
/**
 * 
 * @param {Object} petData - Form data
 * @param {string} petData.id - The pet's ID
 * @returns {Promise<Object>} - The updated pet object
 */
export async function updatePet(petData){
    try{
        const { id } = petData;
        const response = await api.put(`/pets/${id}`, petData);
        return response.data;
    }catch (err) {
        console.error("updatePet.js Failed. petApi.js", err);
        throw err;
    }
}

// delete a pet
/**
 * 
 * @param {Object} petData - Form data
 * @param {string} petData.id - The pet's ID
 * @returns {Promise<Object>} - The deleted pet object
 */
export async function deletePet(petData){
    try{
        const { petId } = petdata;
        const response = await api.delete(`/pets/${petId}`);
        return response.data;
    }catch (err) {
        console.error("deletePet Failed. petApi.js", err);
        throw err;
    }
}