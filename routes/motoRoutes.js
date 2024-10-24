const express = require('express');
const router = express.Router();
const motoController = require('../controllers/motoController');

router.get('/', motoController.getAllMotos);
router.post('/', motoController.createMoto);
router.delete('/:id', motoController.deleteMoto);
router.put('/:id', motoController.updateMoto);

module.exports = router;
