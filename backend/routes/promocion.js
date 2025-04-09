const express = require('express');
const router = express.Router();
const PromocionController = require('../controllers/PromocionController');

router.get('/', PromocionController.getAll);
router.get('/:id', PromocionController.getOne);
router.post('/', PromocionController.create);
router.put('/:id', PromocionController.update);
router.delete('/:id', PromocionController.deleteOne);

module.exports = router;
