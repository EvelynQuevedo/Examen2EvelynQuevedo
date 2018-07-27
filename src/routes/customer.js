const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id_ciclovia', customerController.edit);
router.post('/update/:id_ciclovia', customerController.update);
router.get('/delete/:id_ciclovia', customerController.delete);

module.exports = router;

