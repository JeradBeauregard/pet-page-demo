//--- SPECIES CONTROLLERS

const speciesServices = require("./speciesServices");

exports.getAllSpecies = async (req, res) => {
    try {
        const species = await speciesServices.findAll();
        res.json(species);
    } catch (err) {
        console.error('getAllSpecies Failed. speciesController.js', err);
    }
};

exports.getSpeciesById = async (req, res) => {
    try {
        const species = await speciesServices.findById(req.params.id);
        res.json(species);
    } catch (err) {
        console.error('getSpeciesById Failed. speciesController.js', err);
    }
};

exports.createSpecies = async (req, res) => {
    try {
        const created = await speciesServices.create(req.body);
        res.json(created);
    } catch (err) {
        console.error('createSpecies Failed. speciesController.js', err);
    }
};

exports.updateSpecies = async (req, res) => {
    try {
        const updated = await speciesServices.update(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        console.error('updateSpecies Failed. speciesController.js', err);
    }
};

exports.deleteSpecies = async (req, res) => {
    try {
        const deleted = await speciesServices.remove(req.params.id);
        res.json(deleted);
    } catch (err) {
        console.error('deleteSpecies Failed. speciesController.js', err);
    }
};
