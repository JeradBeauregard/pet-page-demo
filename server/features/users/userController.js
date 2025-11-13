//--- USER CONTROLLERS

const userServices = require("./userServices");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userServices.findAll();
        res.json(users);
    } catch (err) {
        console.error('getAllUsers Failed. userController.js', err);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userServices.findById(req.params.id);
        res.json(user);
    } catch (err) {
        console.error('getUserById Failed. userController.js', err);
    }
};

exports.createUser = async (req, res) => {
    try {
        const created = await userServices.create(req.body);
        res.json(created);
    } catch (err) {
        console.error('createUser Failed. userController.js', err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updated = await userServices.update(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        console.error('updateUser Failed. userController.js', err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleted = await userServices.remove(req.params.id);
        res.json(deleted);
    } catch (err) {
        console.error('deleteUser Failed. userController.js', err);
    }
};
