const Model = require('./speciesModel');
const Base = require('../../utils/baseService');

module.exports = {

    //Basic CRUD through Utils Template

    ...Base(Model),

    // custom service logic
}