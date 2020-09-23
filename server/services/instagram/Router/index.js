const router = require('express').Router();
const InstagramController = require('../Controller');

router.get('/:user', InstagramController.profile);
router.get('/story/:user', InstagramController.story);
router.get('/get_highlight/:user', InstagramController.get_highlight);
router.get('/highlight/:user', InstagramController.highlight);

module.exports = router;
