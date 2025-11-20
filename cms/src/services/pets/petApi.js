import api from '../api';

// get all pets
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
export async function getPetById(PetData){
    try{
        const { petId } = petData;
        const response = await api.get(`/pets/${petId}`);
        return response.data;
    }catch (err) {
        console.error("getPetById Failed. petApi.js", err);
        throw err;
    }
}

// get all pets belonging to a user (by user id)
export async function getPetsByUser(userData){
    try{
        const { userId } = userData;
        const response = await api.get(`/pets/user/${userId}`);
        return response.data;
    }catch (err){
        console.error("getPetsByUser Failed. petApi.js", err);
        throw err;
    }
}

//get all pets belonging to a species (by species id)
export async function getPetsBySpecies(speciesData){
    try{
        const { speciesId } = speciesData;
        const response = await api.get(`/pets/species/${speciesId}`);
        return response.data;
    }catch (err){
        console.error("getPetsBySpecies Failed. PetApi.js", err);
        throw err;
    }
}

// create a new pet
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
export async function updatePet(petData){
    try{
        const { petId } = petData;
        const response = await api.put(`/pets/${petId}`, petData);
        return response.data;
    }catch (err) {
        console.error("updatePet.js Failed. petApi.js", err);
        throw err;
    }
}

// delete a pet :(
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