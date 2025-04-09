const express = require('express');
const router = express.Router();
const TipoPromocionController = require('../controllers/TipoPromocionController');

router.get('/', TipoPromocionController.getAll);
router.get('/:id', TipoPromocionController.getOne);
router.post('/', TipoPromocionController.create);
router.put('/:id', TipoPromocionController.update);
router.delete('/:id', TipoPromocionController.deleteOne);

module.exports = router;
