const express = require('express');
const router = express.Router();
const PromocionReservaController = require('../controllers/PromocionReservaController');

router.get('/', PromocionReservaController.getAll);
router.get('/:id', PromocionReservaController.getOne);
router.post('/', PromocionReservaController.create);
router.put('/:id', PromocionReservaController.update);
router.delete('/:id', PromocionReservaController.deleteOne);

module.exports = router;
