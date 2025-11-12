const mongoose = require('mongoose');
const Shop = require('../shopModel');
const Item = require('../../items/itemModel');
const ConnectDB = require('../../db');

async function seedShopInventories(){
    try{
        await ConnectDB();
       const shops = await Shop.find({});
        const items = await Item.find({});

for (const shop of shops) {
  const inventory = [];

  // Filter items that match ANY of the shop's itemTypes
  const itemsGroupedByType = items.filter(item =>
    item.type.some(typeId =>
      shop.itemTypes.some(shopTypeId => shopTypeId.equals(typeId))
    )
  );

  // Optional: add a few (e.g., 3) of those items to inventory
  itemsGroupedByType.slice(0, 3).forEach(item => {
    inventory.push({
      itemId: item._id,
      quantity: Math.floor(Math.random() * 5) + 1 // random quantity between 1–5
    });
  });

  // Update the shop's inventory
  await Shop.findByIdAndUpdate(shop._id, { inventory });

}
  console.log('shop inventories seeded. seedShopInventories.js');

    }catch (err){
        console.error('failed to seed shop inventories. seedShopInventories.js', err);
    }
}

module.exports = { seedShopInventories }