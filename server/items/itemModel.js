const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    value: {type: Number, required: true},
    type: [{ type: Schema.Types.ObjectId, ref: 'itemTypes' }],  // ref to ItemType Schema

});

module.exports = mongoose.model('Item', itemSchema);