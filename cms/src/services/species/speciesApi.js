import api from '../api';

//get all species
/**
 * 
 * @returns {Promise<Array>} array of species objects
 */
export async function getAllSpecies(){
    try{
        const response = await api.get('/species');
        return response.data;
    }catch (err) {
        console.error("getAllSpecies Failed. speciesApi.js", err);
        throw err;
    }
}

//get species by id
/**
 * 
 * @param {Object} speciesData - Species form data
 * @param {string} speciesData.id - The species ID
 * @returns {Promise<Object>} species object
 */
export async function getSpeciesById(speciesData){
    try{
        const { id } = speciesData;
        const response = await api.get(`/species/${id}`);
        return response.data;
    }catch (err) {
        console.error("getSpeciesById Failed. speciesApi.js", err);
        throw err;
    }
}

// create a new species
/**
 * 
 * @param {Object} speciesData - Species form data
 * @returns {Promise<Object} newly created species object
 */
export async function createSpecies(speciesData){
    try{
        const response = await api.post('/species', speciesData);
        return response.data;
    }catch (err) {
        console.error("createSpecies Failed. speciesApi.js", err);
        throw err;
    }
}

// update a species
/**
 * 
 * @param {Object} speciesData - Species form data
 * @param {string} speciesData.id - The species ID
 * @returns {Promise<Object>} updated species object
 */
export async function updateSpecies(speciesData){
    try{
        const { id } = speciesData;
        const response = await api.put(`/species/${id}`);
        return response.data;
    }catch (err) {
        console.error("updateSpecies Failed. speciesApi.js", err);
        throw err;
    }
}

// delete a species
/**
 * 
 * @param {Object} speciesData - Species form data
 * @param {string} speciesData.id - The species's ID
 * @returns {Promise<Object>} the deleted species object
 */
export async function deleteSpecies(speciesData){
    try{
        const { id } = speciesData;
        const response = await api.delete(`/species/${id}`);
        return response.data;
    }catch (err) {
        console.error("deleteSpecies Failed. speciesApi.js", err);
        throw err;
    }
}
