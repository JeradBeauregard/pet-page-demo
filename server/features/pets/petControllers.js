//--- PET CONTROLLERS

const petServices = require("./petServices")

exports.getAllPets = async (req, res) => {
    try{
    const pets = await petServices.findAll();
    res.json(pets);
    }catch (err) {
        console.error('getAllPets Failed. PetControllers.js', err);
    }
}

exports.getPetById = async (req, res) => {
    try{
        const pet = await petServices.findById(req.params.id);
        res.json(pet);
    }catch (err) {
        console.error('getPetById Failed. PetControllers.js', err);
    }
}

exports.createPet = async (req, res) => {
    try{
        const pet = await petServices.create(req.body);
        res.json(pet); // might change to service response instead
    }catch (err){
        console.error('createPet failed. petController.js', err);
    }
}

exports.updatePet = async (req, res) => {
    try{
        const pet = await petServices.update(req.params.id, req.body);
        res.json(pet);
    }catch (err){
        console.error('updatePet Failed. petController.js', err);
    }
}

exports.deletePet = async (req, res) => {
    try{
        const pet = await petServices.remove(req.params.id);
        res.json(pet);
    }catch (err) {
        console.error('deletePet Failed. petController.js', err);
    }
}

// custom logic controllers

exports.getUsersPets = async (req, res) => {
    try{
        const pets = await petServices.getPetsByUser(request.params.userId);
        res.json(pets);
    }catch (err) {
        console.error("getUserPets failed. petController.js");
    }
}

exports.getPetsBySpecies = async (req, res) => {
    try{
        const pets = await petServices.getAllPetsOfASpecies(request.params.speciesId);
        res.json(pets);
    }catch (err) {
        console.error("getAllPetsofASpecies Failed. petController.js", err);
    }
}

