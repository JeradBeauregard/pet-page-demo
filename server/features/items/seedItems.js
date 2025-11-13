const mongoose = require('mongoose');
const ConnectDB = require('../../db');
const Item = require('./itemModel');
const ItemType = require('./itemTypes/ItemTypeModel');

async function seedItems() {
  try {
    await ConnectDB();

    // Get item types
    const itemTypes = await ItemType.find({});
    const itemTypeMap = {};
    itemTypes.forEach(type => {
      itemTypeMap[type.name] = type._id;
    });

    // Define items using resolved itemTypeMap
    const items = [
      {
        name: "Spirit Berry",
        description: "A glowing fruit that restores a pet’s vitality.",
        value: 15,
        type: [itemTypeMap.Food, itemTypeMap.Healing]
      },
      {
        name: "Echo Orb",
        description: "A mystical orb that calms restless spirits and improves mood.",
        value: 30,
        type: [itemTypeMap.Mood]
      },
      {
        name: "Glimmerdust",
        description: "A fine powder that adds sparkle to your pet's aura.",
        value: 50,
        type: [itemTypeMap.Cosmetic]
      },
      {
        name: "Luminous Leaf",
        description: "Collected from sacred trees, it slightly heals and boosts trust.",
        value: 25,
        type: [itemTypeMap.Healing, itemTypeMap.Spiritual]
      },
      {
        name: "Whisperseed",
        description: "A rare seed that enhances your pet’s emotional resonance.",
        value: 40,
        type: [itemTypeMap.Mood, itemTypeMap.Spiritual]
      },
      {
        name: "Solshard Snack",
        description: "A crunchy treat made from crystallized light energy.",
        value: 20,
        type: [itemTypeMap.Food]
      },
      {
        name: "Charm of Stillness",
        description: "When used, your pet enters a calm, meditative state.",
        value: 60,
        type: [itemTypeMap.Mood, itemTypeMap.Spiritual]
      },
      {
        name: "Tangleroot Rope",
        description: "Used in games and puzzles. Pets love to play with it!",
        value: 10,
        type: [itemTypeMap.Toy]
      },
      {
        name: "Lantern Bud",
        description: "Hangs near a pet's home, providing a faint guiding glow.",
        value: 35,
        type: [itemTypeMap.Decor, itemTypeMap.Spiritual]
      },
      {
        name: "Echo Mask (Common)",
        description: "Temporarily alters the way you view the realm.",
        value: 45,
        type: [itemTypeMap.Cosmetic, itemTypeMap.Collectible]
      }
    ];

    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log('Items seeded. seedItems.js');

  } catch (err) {
    console.error('Failed to seed items. seedItems.js', err);
  }
}

module.exports = { seedItems };
