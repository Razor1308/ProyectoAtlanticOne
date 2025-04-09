const express = require('express');
const router = express.Router();
const ReclamoController = require('../controllers/ReclamoController');

router.get('/', ReclamoController.getAll);
router.get('/:id', ReclamoController.getOne);
router.post('/', ReclamoController.create);
router.put('/:id', ReclamoController.update);
router.delete('/:id', ReclamoController.deleteOne);

module.exports = router;
