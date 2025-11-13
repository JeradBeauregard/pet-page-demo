const mongoose = require('mongoose');
const ConnectDB = require('../../db');
const Species = require('./speciesModel');
const Pet = require('../pets/petModel');



const species = [
  {
    name: 'Solkin',
    description: 'A radiant soul cat often found basking near spirit fires. Its fur glows gently with emotional resonance.'
  },
  {
    name: 'Mireleaf',
    description: 'A swamp-dwelling guardian spirit that sprouts moss and flowers based on the seasons of memory.'
  },
  {
    name: 'Aetherfin',
    description: 'A spectral fish that floats through air instead of water. Said to sing dreams into the clouds.'
  },
  {
    name: 'Duskwisp',
    description: 'A quiet and elusive fox-like being that only appears at twilight. Leaves shimmer where it walks.'
  },
  {
    name: 'Brambleshell',
    description: 'A sturdy, turtle-like protector made of bark and vine. It carries a garden of forgotten thoughts on its back.'
  }
];
async function seedSpecies(){
try{
    
    await ConnectDB();
    await Species.deleteMany({});
    await Species.insertMany(species);
    console.log('species seeded. seedSpecies.js');

// add species to pet collection

   const pets = await Pet.find({});
const speciesList = await Species.find({}); // assuming you have multiple species
let i = 0;

for (const pet of pets) {
  const species = speciesList[i % speciesList.length]; // rotate if more pets than species
  await pet.updateOne({ speciesId: species._id });
  i++;
}
console.log('species added to pets collection. seedSpecies.js');

    
}catch (err) {
    console.error('failed to seed species. seedSpecies.js', err);
}}

module.exports = { seedSpecies }