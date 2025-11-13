const Model = require('./shopModel');
const Base = require('../../utils/baseService');

module.exports = {

    //Basic CRUD through Utils Template

    ...Base(Model),

    // custom service logic
}