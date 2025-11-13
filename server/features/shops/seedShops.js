const mongoose = require('mongoose');
const ConnectDB = require('../../db');
const Shop = require('./shopModel');
const Item = require('../items/itemModel');
const ItemType = require('../items/itemTypes/ItemTypeModel');

async function seedShops(){

    try{
    await ConnectDB();
 // Get item types
    const itemTypes = await ItemType.find({});
    const itemTypeMap = {};
    itemTypes.forEach(type => {
      itemTypeMap[type.name] = type._id;
    });

    const shops = [
  {
    name: "Echo Basket General Store",
    description: "A cozy spot for beginner keepers to pick up basic supplies.",
    inventory: [],
    itemTypes: [itemTypeMap.Food, itemTypeMap.Healing]
  },
  {
    name: "Whisperwood Rare Goods",
    description: "Mysterious trinkets and rare findings hidden in forest shadows.",
    inventory: [],
    itemTypes: [itemTypeMap.Spiritual, itemTypeMap.Collectible]
  },
  {
    name: "Lumenlight Curios",
    description: "Bright and sparkling items that glow under moonlight.",
    inventory: [],
    itemTypes: [itemTypeMap.Cosmetic, itemTypeMap.Decor]
  },
  {
    name: "Sporeling Sundries",
    description: "Basic provisions and tools for marshland explorers.",
    inventory: [],
    itemTypes: [itemTypeMap.Food, itemTypeMap.Toy]
  },
  {
    name: "Keeper's Cache",
    description: "A legendary cache said to stock rare and ancient goods.",
    inventory: [],
    itemTypes: [itemTypeMap.Mood, itemTypeMap.Spiritual, itemTypeMap.Collectible]
  }
];

await Shop.deleteMany({});
await Shop.insertMany(shops);
console.log('shops seeded. seedShops.js');
    }catch (err){
        console.error('shop seeding failed. seedShops.js', err);
    }

}

module.exports = { seedShops }