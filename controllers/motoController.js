const motoService = require('../services/motoService');

const getAllMotos = async (req, res) => {
    try {
        const motos = await motoService.getAllMotos(req);
        res.json(rows);
    } catch (err) {
        res.status(500).send(err);
    }
};

const createMoto = async (req, res) => {
    try {
        await motoService.createMoto(req);
        res.json('Moto insertada en DB!');
    } catch (err) {
        res.status(500).send(err);
    }
};

const deleteMoto = async (req, res) => {
    try {
        await motoService.deleteMoto(req.params.id, req);
        res.json('Moto borrada de DB!');
    } catch (err) {
        res.status(500).send(err);
    }
};

const updateMoto = async (req, res) => {
    try {
        await motoService.updateMoto(req.params.id, req);
        res.json('Moto actualizada en la DB!');
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getAllMotos,
    createMoto,
    deleteMoto,
    updateMoto
};
