const router = require('express').Router();
const contactController = require('./contactController');


router.route('/')
    .get(contactController.getContacts)
    .post(contactController.createContact)

module.exports = router;