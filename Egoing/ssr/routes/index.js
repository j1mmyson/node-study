const express = require('express');
const router = express.Router();
const controller = require('../controller/controllers');


router.get('/', controller.index);
router.get('/list', controller.showAllList);
router.get('/list/:id', controller.getList);
router.get('/write', controller.renderForm);
router.post('/write', controller.write);

module.exports = router;