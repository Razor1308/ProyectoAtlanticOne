const express = require('express');
const router = express.Router();
const EstadoReclamoController = require('../controllers/EstadoReclamoController');

router.get('/', EstadoReclamoController.getAll);
router.get('/:id', EstadoReclamoController.getOne);
router.post('/', EstadoReclamoController.create);
router.put('/:id', EstadoReclamoController.update);
router.delete('/:id', EstadoReclamoController.deleteOne);

module.exports = router;
