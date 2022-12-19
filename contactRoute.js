const router = require('express').Router();
const contactController = require('./contactController');

router.get('/', contactController.getContacts);

module.exports = router;