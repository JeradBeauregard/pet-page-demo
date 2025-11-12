const mongoose = require('mongoose');
const ConnectDB = require('../db');
const Pet = require('./petModel');
const User = require('../users/userModel');


async function seedPets(){

    await ConnectDB();
    await Pet.deleteMany({});
    const users = await User.find({});
    const dummySpeciesId = new mongoose.Types.ObjectId();
// must add species after implementing species schema
    const Pets = [
  { ownerId: users[0]._id, name: 'Lumino', speciesId: dummySpeciesId },
  { ownerId: users[0]._id, name: 'Whisp', speciesId: dummySpeciesId },
  { ownerId: users[1]._id, name: 'Soluna', speciesId: dummySpeciesId },
  { ownerId: users[1]._id, name: 'Echoa', speciesId: dummySpeciesId },
  { ownerId: users[2]._id, name: 'Glim', speciesId: dummySpeciesId },
  { ownerId: users[2]._id, name: 'Rune', speciesId: dummySpeciesId },
  { ownerId: users[3]._id, name: 'Nyx', speciesId: dummySpeciesId },
  { ownerId: users[3]._id, name: 'Vesper', speciesId: dummySpeciesId },
  { ownerId: users[4]._id, name: 'Pollen', speciesId: dummySpeciesId },
  { ownerId: users[4]._id, name: 'Flicker', speciesId: dummySpeciesId },
  { ownerId: users[5]._id, name: 'Glyph', speciesId: dummySpeciesId },
  { ownerId: users[5]._id, name: 'Shade', speciesId: dummySpeciesId },
  { ownerId: users[6]._id, name: 'Brio', speciesId: dummySpeciesId },
  { ownerId: users[6]._id, name: 'Dawn', speciesId: dummySpeciesId },
  { ownerId: users[7]._id, name: 'Veil', speciesId: dummySpeciesId },
  { ownerId: users[7]._id, name: 'Soot', speciesId: dummySpeciesId },
  { ownerId: users[8]._id, name: 'Myco', speciesId: dummySpeciesId },
  { ownerId: users[8]._id, name: 'Sporelle', speciesId: dummySpeciesId },
  { ownerId: users[9]._id, name: 'Whispen', speciesId: dummySpeciesId },
  { ownerId: users[9]._id, name: 'Drift', speciesId: dummySpeciesId }
];

    try{
    const seededPets = await Pet.insertMany(Pets);
    console.log('Pets Seeded. seedPets.js');
    
    // Add pet ids to user collection

    // group pets by owner/user
    

    const petsByUser = {}; // { userId1: [pet1, pet2], userId2: [pet3, pet4] }

    seededPets.forEach(pet => {
        const ownerId = pet.ownerId.toString(); // get owner id convert to string to become key
        if(!petsByUser[ownerId]) petsByUser[ownerId] = []; // if owner id doesnt exist initialize it
        petsByUser[ownerId].push(pet._id); // add pet id to owner array in petsByUser
    });

    // update each user with pet Ids
    //const [userId, petIds] array destructuring
    for(const [userId, petIds] of Object.entries(petsByUser)) { // change object into array [["abc123", ["pet1", "pet2"]], ["xyz456", ["pet3", "pet4"]]]
        await User.findByIdAndUpdate(userId, {$push: { pets: { $each: petIds }}});
    } // find user by id, push into pets, each pet in pet ids array

    console.log('pets succesfully added to users.');

    }catch (err){
        console.error('pet seeding failed. seedPets.js', err);
        process.exit(1);
    }
}

module.exports = { seedPets }