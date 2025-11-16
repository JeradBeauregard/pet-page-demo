const Pet = require('./petModel');
const User = require('../users/userModel');
const Species = require('../species/speciesModel');
const Base = require('../../utils/baseService');

    // custom service logic

    async function getPetsByUser(userId){
        const user = await User.findById(userId).populate("pets");
        if(!user){ throw Error("User not found.");}
        return user.pets;
    }

    async function getPetsBySpecies(speciesId) {
        const pets = await Pet.find({ species: speciesId }).populate("owner");

        return pets;
    }

module.exports = {

    //Basic CRUD through Utils Template

    ...Base(Pet),
    getPetsByUser,
    getPetsBySpecies


}