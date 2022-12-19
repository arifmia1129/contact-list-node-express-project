const router = require('express').Router();
const contactController = require('./contactController');


router.route('/')
    .get(contactController.getContacts)
    .post(contactController.createContact)


router.route('/:contactId')
    .get(contactController.getContact)
    .put(contactController.updateContact)
    .delete(contactController.deleteContact)

module.exports = router;