const Model = require('./ItemTypeModel');
const Base = require('../../../utils/baseService');

module.exports = {

    //Basic CRUD through Utils Template

    ...Base(Model),

    // custom service logic
}

