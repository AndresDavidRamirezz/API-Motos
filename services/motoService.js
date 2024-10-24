const motoModel = require('../models/motoModel');

const getAllMotos = (req) => {
    return new Promise((resolve, reject) => {
        req.getConnection(async (err, conn) => {
            if (err) return reject(err);
            try {
                const motos = await motoModel.getAllMotos(conn);
                resolve(motos);
            } catch (error) {
                reject(error);
            }
        });
    });
};

const createMoto = (req) => {
    return new Promise((resolve, reject) => {
        req.getConnection(async (err, conn) => {
            if (err) return reject(err);
            try {
                await motoModel.createMoto(conn, req.body);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
};

const deleteMoto = (id, req) => {
    return new Promise((resolve, reject) => {
        req.getConnection(async (err, conn) => {
            if (err) return reject(err);
            try {
                await motoModel.deleteMoto(conn, id);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
};

const updateMoto = (id, req) => {
    return new Promise((resolve, reject) => {
        req.getConnection(async (err, conn) => {
            if (err) return reject(err);
            try {
                await motoModel.updateMoto(conn, id, req.body);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
};

module.exports = {
    getAllMotos,
    createMoto,
    deleteMoto,
    updateMoto
};
