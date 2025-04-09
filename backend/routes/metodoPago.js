const express = require('express');
const router = express.Router();
const MetodoPagoController = require('../controllers/MetodoPagoController');

router.get('/', MetodoPagoController.getAll);
router.get('/:id', MetodoPagoController.getOne);
router.post('/', MetodoPagoController.create);
router.put('/:id', MetodoPagoController.update);
router.delete('/:id', MetodoPagoController.deleteOne);

module.exports = router;
