const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
    itemId: {type: Schema.Types.ObjectId, ref: 'Items', required: true},
    quantity: {type: Number, default: 1}
});

const shopSchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    inventory: [inventoryItemSchema],
    itemTypes: [{ type: Schema.Types.ObjectId, ref: 'itemTypes' }],  // ref to ItemType Schema

});

module.exports = mongoose.model('Shop', shopSchema);