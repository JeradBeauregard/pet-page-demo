const mongoose = require('mongoose');
const User = require('../userModel');
const Item = require('../../items/itemModel');
const ConnectDB = require('../../db');

async function seedUserInventories() {
try{
  await ConnectDB();
  const users = await User.find({});
  const items = await Item.find({});

  for (const user of users) {
    const inventory = [];

    // Add 2 random items to each user
    for (let i = 0; i < 2; i++) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      inventory.push({
        itemId: randomItem._id,
        quantity: Math.floor(Math.random() * 5) + 1, // 1 to 5
      });
    }

    // Update user
    await User.findByIdAndUpdate(user._id, { inventory });
  }

  console.log('User inventories seeded. seedUserInventories.js');
}catch (err){
    console.error('user inventory seeding failed. seedUserInventories.js', err);
}
}

module.exports = { seedUserInventories}
