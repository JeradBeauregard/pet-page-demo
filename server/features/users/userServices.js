const Model = require('./userModel');
const Base = require('../../utils/baseService');

module.exports = {

    //Basic CRUD through Utils Template

    ...Base(Model),

    // custom service logic
}