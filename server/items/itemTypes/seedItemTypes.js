const mongoose = require('mongoose');
const ConnectDB = require('../../db');
const ItemType = require('./ItemTypeModel');


const itemTypes = [
  { name: "Food", description: "Restores hunger or provides energy." },
  { name: "Healing", description: "Restores health or vitality." },
  { name: "Mood", description: "Improves mood, trust, or emotional state." },
  { name: "Spiritual", description: "Used in resonance or spiritual rituals." },
  { name: "Toy", description: "Engages pets and provides joy." },
  { name: "Cosmetic", description: "Visual or aesthetic items." },
  { name: "Decor", description: "Items used to decorate environments or pet spaces." },
  { name: "Collectible", description: "Rare or limited-run items to collect or trade." }
];

async function seedItemTypes(){
    try{
        await ConnectDB();
        await ItemType.deleteMany({});
        await ItemType.insertMany(itemTypes);
        console.log('ItemTypes seeded. seedItemTypes.js');
    }catch (err){
        console.error('failed to seed itemTypes. seedItemTypes.js', err);
    }
}

module.exports = { seedItemTypes }