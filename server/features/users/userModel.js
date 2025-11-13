const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
    itemId: { type: Schema.Types.ObjectId, ref: 'Items', required: true },
    quantity: { type: Number, default: 1 }
    
});

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    passwordHash: String, // change to required later, look up seeding password hashes
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],  // ref to Pet schema
    solshards: { type: Number, default: 0 },
    inventory: [inventoryItemSchema]
});

module.exports = mongoose.model('User', userSchema);