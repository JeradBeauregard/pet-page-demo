import api from '../api';

//get all species
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
export async function getSpeciesById(speciesData){
    try{
        const { speciesId } = speciesData;
        const response = await api.get(`/species/${speciesId}`);
        return response.data;
    }catch (err) {
        console.error("getSpeciesById Failed. speciesApi.js", err);
        throw err;
    }
}

// create a new species
export async function createSpecies(speciesData){
    try{
        const response = await api.post('/species');
        return response.data;
    }catch (err) {
        console.error("createSpecies Failed. speciesApi.js", err);
        throw err;
    }
}

// update a species
export async function updateSpecies(speciesData){
    try{
        const { speciesId } = speciesData;
        const response = await api.put(`/species/${speciesId}`);
        return response.data;
    }catch (err) {
        console.error("updateSpecies Failed. speciesApi.js", err);
        throw err;
    }
}

// delete a species
export async function deleteSpecies(speciesData){
    try{
        const { speciesId } = speciesData;
        const response = await api.delete(`/species/${speciesId}`);
        return response.data;
    }catch (err) {
        console.error("deleteSpecies Failed. speciesApi.js", err);
        throw err;
    }
}
