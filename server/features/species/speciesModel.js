const mongoose = require('mongoose');
const { Schema } = mongoose;

const speciesSchema = new Schema({
name: {type: String, required: true, unique: true},
description: {type: String}
});

module.exports = mongoose.model('Species',speciesSchema);

