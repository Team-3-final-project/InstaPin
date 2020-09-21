const router = require('express').Router();
const InstagramController = require('../Controller');

router.get('/:user', InstagramController.profile);
router.get('/story/:user', InstagramController.story);
router.get('/highlight/:user', InstagramController.highlight);

module.exports = router;
