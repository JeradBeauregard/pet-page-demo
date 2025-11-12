const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
ownerId: {type: Schema.Types.ObjectId, ref: 'users', required: true},
name: { type: String, required: true, unique: true},
speciesId: { type: Schema.Types.ObjectId, ref: 'species', required: true},
hunger: { type: Number, default: 80}

});

module.exports = mongoose.model('Pet', petSchema);