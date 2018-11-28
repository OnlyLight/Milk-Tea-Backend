var express = require('express');
var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/product');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
// router.post('/create', controller.create);
// router.patch('/update/:id', controller.update);
// router.delete('/delete/:id', controller.delete);

module.exports = router;